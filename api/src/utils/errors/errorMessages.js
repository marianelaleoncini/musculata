const errorMessages = {
  validEmail: 'Ingresa un email válido',
  onlyString: 'Ingrese sólo letras',
  notEmpty: 'El campo no puede estar vacío',
  minLength(value) {
    return `Ingrese por lo menos ${value} caracteres`;
  }
};

module.exports = errorMessages;