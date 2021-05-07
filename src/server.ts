import express, { response } from "express";

import "./database";
import { routes } from "./routes";


const app = express();

app.use(express.json());

app.use(routes);

/**
 * 
 * GET = Buscas
 * POST = Criacao
 * PUT = Alteracao
 * DELETE = Deletar
 * PATCH = Alterar uma informacao especifica
 * 
 */

 /**
    app.get("/", (request, response) => {
        return response.send("Ola NLW 05");
    });

    app.post("/", (request, response) => {
        return response.json({ message: "usuario salvo com sucesso!" });
    });
 */

app.listen(3333, () => console.log("Server is running on port 3333"));
