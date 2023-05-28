const regMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regPass = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{5,9})\S$/;

export default function Validation (inputs){

    const errors = {};
    if (!regMail.test(inputs.email)) {errors.email='formato de email no válido'}
    if (!inputs.email) {errors.email ='este campo es obligatorio'}

    if(!inputs.password) {errors.password='este campo es obligatorio'}
    if (!regPass.test(inputs.password)) {errors.password='debe tener entre 6 y 10 caracteres, al menos 1 numero y al menos una mayúscula'};

    if(!inputs.passwordValidate) {errors.passwordValidate='este campo es obligatorio'}
    if (!regPass.test(inputs.passwordValidate)) {errors.passwordValidate='debe tener entre 6 y 10 caracteres, al menos 1 numero y al menos una mayúscula'};
    if(inputs.passwordValidate !== inputs.password) {errors.passwordValidate='las contraseñas deben coincidir'};
    
    return errors;
}