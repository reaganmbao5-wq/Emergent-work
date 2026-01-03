# Backend Integration Contracts for Archie's Bistro

## Review System Implementation

### Database Schema

**Collection: reviews**
```python
{
    "id": "unique_id",
    "name": "string",
    "rating": "integer (1-5)",
    "review_text": "string",
    "avatar": "string (initials)",
    "created_at": "datetime",
    "approved": "boolean (default: True for now, False for strict moderation)"
}
```

### API Endpoints

#### 1. POST /api/reviews
**Purpose:** Submit a new review
**Request Body:**
```json
{
    "name": "John Smith",
    "rating": 5,
    "review_text": "Amazing food and service!"
}
```
**Response:**
```json
{
    "id": "generated_id",
    "name": "John Smith",
    "rating": 5,
    "review_text": "Amazing food and service!",
    "avatar": "JS",
    "created_at": "2025-01-03T12:00:00Z",
    "approved": true
}
```

#### 2. GET /api/reviews
**Purpose:** Get all approved reviews
**Response:**
```json
[
    {
        "id": "1",
        "name": "John Smith",
        "rating": 5,
        "review_text": "Amazing!",
        "avatar": "JS",
        "created_at": "2025-01-03T12:00:00Z",
        "date": "Just now"
    }
]
```

#### 3. GET /api/reviews/stats
**Purpose:** Get review statistics for dynamic rating display
**Response:**
```json
{
    "average_rating": 4.9,
    "total_reviews": 67,
    "rating_breakdown": {
        "5": 55,
        "4": 8,
        "3": 2,
        "2": 1,
        "1": 1
    }
}
```

#### 4. GET /api/reviews/all (Admin)
**Purpose:** Get all reviews including unapproved ones
**Response:** Same as GET /api/reviews but includes unapproved reviews

#### 5. PUT /api/reviews/{id}/approve (Admin)
**Purpose:** Approve a pending review
**Response:**
```json
{
    "success": true,
    "message": "Review approved"
}
```

#### 6. DELETE /api/reviews/{id} (Admin)
**Purpose:** Delete a review
**Response:**
```json
{
    "success": true,
    "message": "Review deleted"
}
```

### Frontend Integration Plan

1. **Remove mock data imports** from Reviews component
2. **Fetch reviews on mount** using axios GET /api/reviews
3. **Fetch stats on mount** using axios GET /api/reviews/stats
4. **Submit new reviews** using axios POST /api/reviews
5. **Display dynamic rating** from stats API
6. **Create Admin Panel** (optional route /admin) for review moderation

### Mock Data to Backend Migration

Current mock reviews in `/app/frontend/src/mock.js` will be:
- Migrated to database as initial seed data (6 reviews)
- Frontend will fetch from API instead of importing mock
- All new reviews will be stored in MongoDB

### Implementation Steps

1. ✅ Create Review model in backend
2. ✅ Implement all API endpoints
3. ✅ Test endpoints with curl
4. ✅ Update frontend to use API
5. ✅ Remove mock dependency
6. ✅ Add admin panel for moderation
7. ✅ Test full flow

### Notes

- For MVP, we'll set `approved=True` by default for auto-approval
- Admin moderation can be toggled by changing default to `False`
- Rating calculation is dynamic based on all approved reviews in database
- Time display uses relative formatting ("Just now", "2 hours ago", etc.)
