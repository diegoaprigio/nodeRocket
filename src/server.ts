import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 3333"));

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
