const errorMessages = {
  validEmail: 'Ingresa un email válido',
  onlyString: 'Ingrese sólo letras',
  notEmpty: 'El campo no puede estar vacío',
  validUserType: 'Ingrese un tipo de usuario válido',
  equalPassword: 'Las contraseñas deben coincidir',
  existingUser: 'El usuario ya existe',
  nonexistingUser: 'El usuario no existe',
  genericError: 'Hubo un error. Vuelva a intentar nuevamente.',
  minLength(value) {
    return `Ingrese por lo menos ${value} caracteres`;
  }
};

module.exports = errorMessages;