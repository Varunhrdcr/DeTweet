from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import Base, engine, SessionLocal

# Create all database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title="E-commerce Chatbot API",
    version="1.0.0",
    description="Backend service to manage chat sessions and messages."
)

# Enable CORS (important for frontend to call APIs)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can limit this to specific frontend domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Root endpoint
@app.get("/")
def read_root():
    """
    Check if FastAPI server is running.
    """
    return {"status": "FastAPI is working"}

# Create a new chat session
@app.post("/chat/session", response_model=schemas.ChatSession)
def create_session(session_data: schemas.ChatSessionCreate, db: Session = Depends(get_db)):
    """
    Create a new chat session for a given user.
    """
    return crud.create_chat_session(db, session_data.user_id)

# Post a new message to a session
@app.post("/chat/message/{session_id}", response_model=schemas.ChatMessage)
def post_message(session_id: int, message: schemas.ChatMessageCreate, db: Session = Depends(get_db)):
    """
    Add a new chat message to a specific session.
    """
    return crud.add_message(db, session_id, message)

# Retrieve a session and all its messages
@app.get("/chat/session/{session_id}", response_model=schemas.ChatSession)
def get_session(session_id: int, db: Session = Depends(get_db)):
    """
    Retrieve a chat session along with its messages.
    """
    return crud.get_session_with_messages(db, session_id)

@app.post("/chat/message/{session_id}", response_model=schemas.ChatMessage)
def post_message(session_id: int, message: schemas.ChatMessageCreate, db: Session = Depends(get_db)):
    user_msg = crud.add_message(db, session_id, message)

    if message.auto_respond:
        # fetch message history
        messages = crud.get_session_messages(db, session_id)

        # simulate LLM response
        llm_content = crud.simulate_llm_response(messages)

        # store LLM reply
        bot_msg_data = schemas.ChatMessageCreate(
            role="assistant",
            content=llm_content
        )
        crud.add_message(db, session_id, bot_msg_data)

    return user_msg
