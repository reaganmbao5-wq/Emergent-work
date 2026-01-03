from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class ReviewCreate(BaseModel):
    name: str
    rating: int = Field(..., ge=1, le=5)
    review_text: str

class Review(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    rating: int = Field(..., ge=1, le=5)
    review_text: str
    avatar: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    approved: bool = True  # Auto-approve for MVP, can be set to False for moderation

class ReviewResponse(BaseModel):
    id: str
    name: str
    rating: int
    review_text: str
    avatar: str
    created_at: datetime
    approved: bool
    date: str  # Relative date like "Just now", "2 weeks ago"

class ReviewStats(BaseModel):
    average_rating: float
    total_reviews: int
    rating_breakdown: dict

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str
