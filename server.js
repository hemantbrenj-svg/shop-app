const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Shop App</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #eef2f7;
      }

      .navbar {
        background: #1e293b;
        color: white;
        padding: 15px;
        display: flex;
        justify-content: space-between;
      }

      .container {
        padding: 20px;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
      }

      .card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 3px 8px rgba(0,0,0,0.1);
      }

      .price {
        color: green;
        font-weight: bold;
      }

      button {
        margin-top: 10px;
        padding: 10px;
        border: none;
        background: #2563eb;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }

      button:hover {
        background: #1d4ed8;
      }
    </style>
  </head>

  <body>

    <!-- Navbar -->
    <div class="navbar">
      <h2>🛒 Shop App</h2>
      <h3>Cart: <span id="count">0</span></h3>
    </div>

    <div class="container">
      <h2>Available Products</h2>

      <div class="grid">

        <div class="card">
          <h3>🎧 Headphones</h3>
          <p class="price">₹1999</p>
          <button onclick="add()">Add to Cart</button>
        </div>

        <div class="card">
          <h3>⌚ Smart Watch</h3>
          <p class="price">₹2999</p>
          <button onclick="add()">Add to Cart</button>
        </div>

        <div class="card">
          <h3>🔊 Speaker</h3>
          <p class="price">₹999</p>
          <button onclick="add()">Add to Cart</button>
        </div>

        <div class="card">
          <h3>⌨️ Keyboard</h3>
          <p class="price">₹1499</p>
          <button onclick="add()">Add to Cart</button>
        </div>

        <div class="card">
          <h3>🖱️ Mouse</h3>
          <p class="price">₹799</p>
          <button onclick="add()">Add to Cart</button>
        </div>

        <div class="card">
          <h3>📱 Smartphone</h3>
          <p class="price">₹14999</p>
          <button onclick="add()">Add to Cart</button>
        </div>

      </div>
    </div>

    <script>
      let count = 0;
      function add() {
        count++;
        document.getElementById("count").innerText = count;
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});