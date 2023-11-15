import mongoose, {Schema} from 'mongoose';
import validator from 'validator';
import { passwordReg} from './user.validations';

const UserSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email!',
        },     
    },

   NumControl: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
    },

    Nombre: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
    },
    ApellidoPa: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
    },
    ApellidoMa: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
        unique: true,
    },

    Genero: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
        unique: true,
    },

    Telefono: {
        type: String,
        required: [true, 'campo obligatorio!'],
        trim: true,
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true,
        minlength: [6, 'Password need to be longer!'],
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: '{VALUE} is not a valid password!',
        },
    },
});
export default mongoose.model('User', UserSchema);