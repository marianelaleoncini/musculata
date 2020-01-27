const errorMessages = {
  validEmail: 'Ingresa un email válido',
  onlyString: 'Ingrese sólo letras',
  minLength(value) {
    return `Ingrese por lo menos ${value} caracteres`;
  }
};

module.exports = errorMessages;