import mongoose, {Schema} from 'mongoose';
import validator from 'validator';
import { passwordReg} from './user.validations';

const UserSchema = new Schema({

  

   NumAdqui: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
    },

    NombreLibro: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
    },
    NombreAuthor: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
    },
    Editorial: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
        unique: true,
    },

    Clasificacion: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
        unique: true,
    },

    ISBN: {
      type: Number,
      unique: true,
      required: [true, 'Se requiere la ISB del Libro!'],
      trim: true,
      validate: {
          validator(ISBN) {
              return validator.isISBN(ISBN);
          },
          message: '{VALUE} is not a val!',
      },     

    },
});
export default mongoose.model('User', UserSchema);
