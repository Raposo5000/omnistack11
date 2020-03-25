const express = require('express');
const OngController = require('./controllers/OngController')
const IncdentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const connection = require('./database/connection')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs',OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncdentController.index)
routes.post('/incidents', IncdentController.create)

//4c3461a3

routes.delete('/incidents/:id', IncdentController.delete)
 
module.exports = routes