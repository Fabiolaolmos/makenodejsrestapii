// Importando el Router de Express
import {Router} from 'express';

// Importando el controlador
import librocontrollers from './librocontrollers';

// Importando factory de validación
import ValidateFactory from '../../services/validateFactory';
// Importando el validador de proyectos
import projectValidator from './librovalidations';

const router = new Router();
// POST "/project/add"
router.post('/add',ValidateFactory({
      schema: projectValidator.projectSchema,
      getObject: projectValidator.getProject,
    }),
    librocontrollers.add,
  );
  