// ======= CONFIGURACIÓN DE SERVIDOR ========
import cors from "cors";
import { connectDB } from './config/db';
import router from './router';
import 'dotenv/config';

// const express = require('express'); Sintaxis anterior
import express from 'express'
import { corsConfig } from './config/cors';

// Instancia de express
const app = express();

// Conectar con la base de datos
connectDB();

// Configurar cors
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json())

app.use('/api', router);

export default app;