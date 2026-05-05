🛒 Shop App

A simple Node.js application containerized using Docker and deployed on Kubernetes (Minikube).

---

🚀 Features

- Node.js Express server
- Simple shop UI
- Docker container
- Kubernetes deployment
- Exposed using NodePort

---

📁 Project Structure

shop-app/
├── server.js
├── package.json
├── Dockerfile
├── deployment.yml
└── service.yml

---

⚙️ Run Locally

npm install
node server.js

Open:

http://localhost:3000

---

🐳 Docker

Build image:

docker build -t shop-app .

Run container:

docker run -p 3000:3000 shop-app

---

☸️ Kubernetes (Minikube)

Start Minikube:

minikube start

Connect Docker:

minikube docker-env | Invoke-Expression

Build image:

docker build -t shop-app .

Deploy:

kubectl apply -f deployment.yml
kubectl apply -f service.yml

Run:

minikube service shop-service

---

🧰 Tech Stack

- Node.js
- Express
- Docker
- Kubernetes
- Minikube
