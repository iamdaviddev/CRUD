import { Router } from 'express';
import SelectController from './app/controllers/SelectController.js';

const routes = Router();

routes.get('/selecoes', SelectController.index)
routes.get('/selecoes/:id', SelectController.show)
routes.post('/selecoes', SelectController.create)
routes.put('/selecoes/:id', SelectController.update)
routes.delete('/selecoes/:id', SelectController.delete)

export default routes;