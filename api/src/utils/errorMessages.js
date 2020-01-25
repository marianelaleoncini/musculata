const errorMessages = {
  validEmail: 'Ingresa un email válido',
  minLength(value) {
    return `Ingrese por lo menos ${value} caracteres`;
  }
}

module.exports = errorMessages;