const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const procuctRoute = require("./routes/productRoute"); //importando a rota do produto
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/v1/products", procuctRoute); //rota v1 product

module.exports = app;
