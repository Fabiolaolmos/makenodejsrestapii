import Joi from 'joi'; // Importamos yup para la validadción

export const passwordReg = /^[a-zA-Z0-9]{6}$/;

export default {
    signUp: {
    body: Joi.object({
        email: Joi.string().email().required().messages({
          'any.required': 'Debe proporcionarse un email valido',
        }),
        password: Joi.string().regex(passwordReg).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        userName: Joi.string().required(),
      }),
    },
  };
