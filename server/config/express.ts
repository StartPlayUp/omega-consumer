import next from "next";
import express, { Request, Response } from "express";
import "reflect-metadata";
import routes from "../routes";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import { validate } from "class-validator";
require('dotenv').config();
const server = express()
server.use(cookieParser())
server.use(express.json())
server.use(morgan('dev'));
server.use('/api', routes)

export default server;
