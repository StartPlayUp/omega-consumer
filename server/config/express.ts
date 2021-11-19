import next from "next";
import express, { Request, Response } from "express";
import "reflect-metadata";
import routes from "../routes";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
const server = express()

if (process.env.NODE_ENV !== 'production') {
    server.use(cors({
        origin: '*'
    }));
}

require('dotenv').config();
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json())
server.use(morgan('combined'));
server.use('/api', routes)

export default server;
