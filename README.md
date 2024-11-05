# FluxTalk Backend
Fluxtalk is a chat application designed for seamless communication. This repository contains the backend API for Fluxtalk, built with Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Support or Contact](#support-or-contact)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kranthikata/fluxtalk-backend.git
   ```
2. **Navigate to the directory**
   ```bash
   cd fluxtalk-backend
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   Create a .env file in the root of your project and add your database and environment configuration:
   ```bash
   PORT = 5000
   MONGODB_URI = mongodb+srv://username:<password>@cluster0.u7qo7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET = your-secret
   ```
## Usage
**Start the server**
   ```bash
   nodemon server.js
   ```
   The App will be running at http://localhost:5000/

## API Endpoints
### Authentication
- POST api/v1/auth/register
- POST api/v1/auth/login
  
### Chat
- POST api/v1/chats
- GET api/v1/chats
- POST api/v1/chats/group
- PUT api/v1/chats/rename
- PUT api/v1/chats/groupadd
- PUT api/v1/chats/groupremove

### User
- GET api/v1/users?search=dustin

### Messages
- POST api/v1/messages/
- GET api/v1/messages/:id

## Support or Contact

If you encounter any issues, have questions, or need further assistance, feel free to reach out:

- Email: [kranthikumarkata464@gmail.com](mailto:kranthikumarkata464@gmail.com)
