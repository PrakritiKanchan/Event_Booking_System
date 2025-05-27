# Online Event Management System API

This is a RESTful API for managing online events — users, events, registrations, and more.  
Built with **Node.js**, **Express**, **TypeScript**, and **Prisma**.

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v16 or higher recommended)  
- npm (comes with Node.js)  
- PostgreSQL or your preferred database (if using Prisma)

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/event-management-system.git
cd event-management-system

📚 API Endpoints Documentation
Base URL: http://localhost:5000/api

Auth Routes
Method	Endpoint	Description	Request Body	Response
POST	/api/auth/register	Register a new user	{ name, email, password }	Success message or error
POST	/api/auth/login	Login user and get JWT token	{ email, password }	{ token, user }

User Routes
Method	Endpoint	Description	Request Params / Body	Response
GET	/api/users	Get all users (admin only)	-	List of users
GET	/api/users/:id	Get user by ID	id in URL	User details

Event Routes
Method	Endpoint	Description	Request Body	Response
GET	/api/events	Get all events	-	List of events
GET	/api/events/:id	Get event by ID	id in URL	Event details
POST	/api/events	Create a new event	{ title, description, date }	Created event data
PUT	/api/events/:id	Update event by ID	{ title, description, date }	Updated event data
DELETE	/api/events/:id	Delete event by ID	id in URL	Success message

Registration Routes
Method	Endpoint	Description	Request Body	Response
POST	/api/registrations	Register user for event	{ userId, eventId }	Registration details
GET	/api/registrations	Get all registrations	-	List of registrations

🛠 Sample .env file
PORT=5000
DATABASE_URL="postgresql://username:password@localhost:5432/eventdb?schema=public"
JWT_SECRET="your_jwt_secret_key_here"

