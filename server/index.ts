import { createConnection } from 'typeorm';
import { createDatabase } from "typeorm-extension";
import express, { Request, Response } from "express";

import server from './config/express';
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 5000;



(async () => {
    try {
        await app.prepare();

        // ormconfig.js 의 database이름으로 database 생성
        await createDatabase({ ifNotExist: true, charset: "utf8mb4_general_ci", characterSet: "utf8mb4" });

        // typeorm 연결
        await createConnection()

        // 프론트 서버 시작
        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });

        // 니머지 주소 라우팅 처리
        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();