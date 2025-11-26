## 📇 Contact Manager API

A simple and beginner-friendly RESTful API built using Node.js, Express.js, and MongoDB to manage contacts with full CRUD functionality.

## 🗓️ Project Duration

November 2025

## 🚀 Features

```
 ➕ Create new contacts

📄 Fetch all contacts

🔍 Get a contact by ID

✏️ Update contact details

❌ Delete a contact

🗂️ Uses MongoDB with Mongoose

📡 Clean and organized MVC architecture

🧪 Tested using Postman 
```
## 🛠️ Tech Stack

- Backend: Node.js, Express.js

- Database: MongoDB (Mongoose ODM)

- Tools: Postman, Git, GitHub, VS Code

- Environment: dotenv

## 📁 Folder Structure
```
 contact-manager-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── contactControllers.js
│
├── models/
│   └── contactModel.js
│
├── routes/
│   └── contactRoutes.js
│
├── .env
├── file.js           (main server file)
├── package.json
└── README.md 
```
## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```
git clone https://github.com/Smitojit/contact-manager-api.git
```
### 2️⃣ Navigate into the Project
```
cd contact-manager-api
```
### 3️⃣ Install Dependencies
```
npm install
```
### 4️⃣ Set Environment Variables

Create a .env file and add:
```
MONGO_URL=mongodb://127.0.0.1:27017/contact_manager
PORT=3000
```
### 5️⃣ Start the Server
```
node file.js
```
### 6️⃣ Test in Browser / Postman
```
http://localhost:3000/api/contacts
```
## 🔌 API Endpoints
#### ➕ Create Contact

POST /api/contacts/create
```
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "phone": 9876543210
}
```
#### 📄 Get All Contacts

GET /api/contacts

#### 🔍 Get Contact by ID

GET /api/contacts/:id

#### ✏️ Update Contact

PUT /api/contacts/:id
```
{
  "name": "John Updated",
  "email": "johnnew@gmail.com",
  "phone": 9876543211
}
```
#### ❌ Delete Contact

DELETE /api/contacts/:id

## 📌 Future Improvements

- Add Authentication (JWT)

- Add Search & Pagination

- Add User-specific contacts
