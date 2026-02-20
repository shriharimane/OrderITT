# OrderITT — Order Management System

A full-stack web application for managing customer orders end-to-end. OrderITT covers the complete order lifecycle — from creation and tracking to updates and deletion — with a clean UI and a RESTful backend API.

🔗 **Repository:** [github.com/shriharimane/OrderITT](https://github.com/shriharimane/OrderITT.git)

---

## Overview

OrderITT simulates a real-world order management workflow. Customers can browse products, place orders, and track their status. Admins get a centralized dashboard to create, modify, and delete orders. The project is built to demonstrate practical full-stack development — REST API design, database modeling, and frontend-backend integration — in a single cohesive application.

---

## Features

### Customer-Facing
- View available products and existing orders
- Place new orders through a simple UI
- Track live order status

### Admin Dashboard
- Create, update, and delete orders
- Manage all order details from one view
- Full CRUD control over the order database

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| API Testing | Postman |
| Version Control | Git & GitHub |

---

## Project Structure

```
OrderITT/
│
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── controllers/     # Business logic
│   ├── routes/          # API route definitions
│   └── server.js        # Entry point & Express setup
│
├── frontend/
│   ├── index.html       # Main UI
│   ├── style.css        # Styling
│   └── script.js        # Frontend logic & API calls
│
├── package.json
└── README.md
```

---

## Getting Started

**Prerequisites:** Node.js 16+, npm, and a running MongoDB instance (local or Atlas)

```bash
# 1. Clone the repository
git clone https://github.com/shriharimane/OrderITT.git
cd OrderITT

# 2. Install dependencies
npm install

# 3. Configure environment variables
#    Create a .env file in the root with:
#    MONGO_URI=your_mongodb_connection_string
#    PORT=3000

# 4. Start the server
npm start
```

Server runs at: [http://localhost:3000](http://localhost:3000)

---

## API Reference

Base URL: `http://localhost:3000/api/orders`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Fetch all orders |
| `GET` | `/:id` | Fetch a single order by ID |
| `POST` | `/` | Create a new order |
| `PUT` | `/:id` | Update order details or status |
| `DELETE` | `/:id` | Delete an order |

Use [Postman](https://www.postman.com/) to test endpoints during development.

---

## Concepts Demonstrated

- RESTful API design with Express.js
- Full CRUD operations against a MongoDB database
- MVC-style separation — models, controllers, and routes
- Frontend-to-backend integration via fetch/AJAX
- Schema modeling with Mongoose
- Basic error handling and input validation

---

## Roadmap

- [ ] JWT-based user authentication
- [ ] Role-based access control (Admin / Customer)
- [ ] Payment gateway integration
- [ ] Real-time order status notifications
- [ ] Frontend rebuild with React and Tailwind CSS
- [ ] Deployment to Render / Railway / Vercel + MongoDB Atlas

---

## Use Cases

- Full-stack portfolio or internship showcase project
- Academic mini / major project submission
- REST API design and CRUD practice
- Foundation for a production-grade order management service

---

## License

MIT — free to use and adapt with attribution.
