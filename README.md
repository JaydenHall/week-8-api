# week-8-api

Animal Collective Nouns
Endpoints
GET /api/animals/

Response Body:

[
  {
    "id": 1,
    "name": "duck",
  },
  {
    "id": 2,
    "name": "cat",
  }
]
GET /api/animals/:id/

Response Body:

[
  {
    "id": 1,
    "name": "duck",
    "nouns": [
      "badling or badelynge",
      "paddling",
      "plump",
      "raft"
    ]
  }
]
POST /api/animals/

Request Body:

{
  "name": "duck",
  "nouns": [
      "badling or badelynge",
      "paddling",
      "plump",
      "raft"
    ]
}
Error Reporting
Standard Error Response Body:

{
  "success": false,
  "message": "Something went wrong",
  "error_code": 684
}
