// Importando biblioteca de validacion
import * as Yup from 'yup';

// Creando un esquema de validación para el proyecto
const projectSchema = Yup.object().shape({
    NumAdqui: Yup.string().required('Se requiere un nombre de proyecto'),
    TipoAqui: Yup.string().required('Se requiere un nombre de proyecto'),
    NombreLibro: Yup.string().required('Se requiere un nombre de proyecto'),
    NombreAuthor: Yup.string().required('Se requiere un nombre de proyecto'),
    Editorial: Yup.string().required('Se requiere un nombre de proyecto'),
    Clasificacion: Yup.string().required('Se requiere un nombre de proyecto'),
    ISBN: Yup.string().required('Se requiere un nombre de proyecto'),
    
});

// Creando el extractor de datos de la petición
const getProject = (req) => {
    // Extrayendo datos de la petición
    const { NumAdqui, TipoAqui,NombreLibro,NombreAuthor,Editorial,Clasificacion,ISBN } = req.body;
    // Regresando el objeto proyecto
    return {
        NumAdqui, 
        TipoAqui,
        NombreLibro,
        NombreAuthor,
        Editorial,
        Clasificacion,
        ISBN
    };
  };

  export default {
    projectSchema,
    getProject,
  };