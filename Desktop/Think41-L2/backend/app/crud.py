from sqlalchemy.orm import Session
from . import models, schemas

def create_chat_session(db: Session, user_id: int):
    session = models.ChatSession(user_id=user_id)
    db.add(session)
    db.commit()
    db.refresh(session)
    return session

def add_message(db: Session, session_id: int, message_data: schemas.ChatMessageCreate):
    message = models.ChatMessage(session_id=session_id, **message_data.dict())
    db.add(message)
    db.commit()
    db.refresh(message)
    return message

def get_session_with_messages(db: Session, session_id: int):
    return db.query(models.ChatSession).filter(models.ChatSession.id == session_id).first()
