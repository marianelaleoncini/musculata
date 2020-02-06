const errorMessages = {
  validEmail: 'Ingresa un email válido',
  onlyString: 'Ingrese sólo letras',
  notEmpty: 'El campo no puede estar vacío',
  validUserType: 'Ingrese un tipo de usuario válido',
  minLength(value) {
    return `Ingrese por lo menos ${value} caracteres`;
  }
};

module.exports = errorMessages;