from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import Base, engine, SessionLocal

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/chat/session", response_model=schemas.ChatSession)
def create_session(session_data: schemas.ChatSessionCreate, db: Session = Depends(get_db)):
    return crud.create_chat_session(db, session_data.user_id)

@app.post("/chat/message/{session_id}", response_model=schemas.ChatMessage)
def post_message(session_id: int, message: schemas.ChatMessageCreate, db: Session = Depends(get_db)):
    return crud.add_message(db, session_id, message)

@app.get("/chat/session/{session_id}", response_model=schemas.ChatSession)
def get_session(session_id: int, db: Session = Depends(get_db)):
    return crud.get_session_with_messages(db, session_id)
