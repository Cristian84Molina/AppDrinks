const express = require("express");
const { createFormaspago } = require("../controllers/FormasPagoController");
const server = express();

server.post("/", async (req, res) => {
  const datos = req.body;
  try {
    const result = await createFormaspago(datos);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});