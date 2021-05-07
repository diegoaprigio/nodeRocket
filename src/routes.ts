import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

/**
 * Tipos de parametros
 * 
 * Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 * 
 * }
 */

export { routes };