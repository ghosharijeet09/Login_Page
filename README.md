eCommerce Login Page

This project is a login page for an eCommerce platform, built with React.js for the frontend, Node.js for the backend, and MongoDB Atlas for database management. The application is containerized and deployed using Docker Desktop.

Features

User Registration: Secure signup functionality with form validation.

User Authentication: Login system using JWT (JSON Web Token).

Database Integration: User data stored in MongoDB Atlas.

Responsive Frontend: Built with React.js for an interactive user experience.

Containerized Deployment: Dockerized frontend and backend services for easy deployment.

Prerequisites

Ensure you have the following installed:

Node.js (v14 or later)

MongoDB Atlas Account

Docker Desktop

A Docker Hub account for pushing images

Setup and Installation

1. Clone the Repository

git clone <repository-url>
cd ecommerce-login-page

2. Backend Setup

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create a .env file and add the following:

PORT=5000
DB_USER=<your-mongodb-atlas-username>
DB_PASSWORD=<your-mongodb-atlas-password>
MONGO_URI=mongodb+srv://<your-mongodb-cluster>/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret

Start the backend:

npm start

3. Frontend Setup

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the React app:

npm start

Dockerization

1. Build Docker Images

In the root directory of the project, ensure Dockerfile and docker-compose.yml are properly configured. Then run:

docker-compose build

2. Start Containers

Run the following command to start the containers:

docker-compose up

3. Push Images to Docker Hub

Tag and push the Docker images to your Docker Hub account:

docker tag backend_c <dockerhub-username>/backend:latest
docker tag frontend_c <dockerhub-username>/frontend:latest

docker push <dockerhub-username>/backend:latest
docker push <dockerhub-username>/frontend:latest

Project Structure

ecommerce-login-page/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── routes/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
├── docker-compose.yml
└── README.md

Deployment

The project is designed to run on Docker Desktop.

MongoDB Atlas is used for cloud database services.

Docker Hub is used to store containerized images for distribution.

Usage

Open your browser and navigate to:

Frontend: http://localhost:3000

Backend: http://localhost:5000

Test the following functionalities:

Register a new user

Login with existing credentials

Technologies Used

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB Atlas

Deployment: Docker Desktop, Docker Hub

Contributions

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.
 
 ## Login Page for E-Commerce Application

## Screenshots for ref:

![1](https://github.com/ghosharijeet09/Login_Page/blob/c33923f03c2d817ce0d3f2162f7f0eaaa4a461ca/extra_docs/Register.png)

![2](https://github.com/ghosharijeet09/Login_Page/blob/c33923f03c2d817ce0d3f2162f7f0eaaa4a461ca/extra_docs/Login.png)

![3](https://github.com/ghosharijeet09/Login_Page/blob/c33923f03c2d817ce0d3f2162f7f0eaaa4a461ca/extra_docs/HomePage.png)

![4](https://github.com/ghosharijeet09/Login_Page/blob/c33923f03c2d817ce0d3f2162f7f0eaaa4a461ca/extra_docs/VieProfile.png)

![5](https://github.com/ghosharijeet09/Login_Page/blob/c33923f03c2d817ce0d3f2162f7f0eaaa4a461ca/extra_docs/EditProfile.png)

![6](https://github.com/ghosharijeet09/Login_Page/blob/3229494c452cd05086af011f1e1020804785bb02/extra_docs/Docker.png)


