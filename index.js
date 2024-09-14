// 1. Importaciones
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

// Importación de conexión de DB
const connectDB = require("./config/db");

// 2. Middlewares
// Base de datos
connectDB(); // Connect to the MongoDB database

// Todas las peticiones y respuestas se manejan en protocolo JSON
app.use(express.json());

// 3. Rutas
app.use("/books", require("./routes/books"));

// 4. Server
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export the app for Vercel
module.exports = app;
