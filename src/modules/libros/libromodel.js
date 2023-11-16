// import mongoose, {Schema} from 'mongoose';    project.model.js
// import validator from 'validator';
// Importando Mongoose
import mongoose from 'mongoose';
// Desestructurando un generador de Schemas de mongoose
const { Schema } = mongoose;

// Creando el esquema
const ProjectSchema = new Schema({ // const UserSchema = new Schema({
    NumAdqui: {
      type: String,
      required: true,
    },
    TipoAqui: {
      type: String,
      required: true,
    },

    NombreLibro: {
        type: String,
        required: true,
      },

      NombreAuthor: {
        type: String,
        required: true,
      },
  
      Editorial: {
        type: String,
        required: true,
      },
      Clasificacion: {
        type: String,
        required: true,
      },

      ISBN: {
        type: String,
        required: true,
    },
});

      export default mongoose.model('project', ProjectSchema);

// export default mongoose.model('User', UserSchema);
