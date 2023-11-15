import Joi from 'joi'; 

export const passwordReg = /^[a-zA-Z0-9]{6}$/;

export default {
    signUp: {
    body: Joi.object({
        ISBN: Joi.number().required().messages({
          'any.required': 'Debe proporcionarse un ISBN valido',
        }),
        NumAdqui: Joi.string().required(),
        NombreLibro: Joi.string().required(),
        NombreAuthor: Joi.string().required(),
        Editorial: Joi.string().required(),
        Clasificacion: Joi.string().required(),
        

      }),
    },
  };
