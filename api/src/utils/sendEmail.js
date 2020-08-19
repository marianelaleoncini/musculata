const sendGridMail = require('@sendgrid/mail');

const sender = 'musculata@gmail.com';
const types = {
  registration: {
    subject: 'Confirmación de Registro',
    html: 'Por favor ingrese al siguiente link para confirmar su registro y generar su contraseña',
  }
};

const sendEmail = (to, type) => {
  sendGridMail.setApiKey('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');
  const { subject, html } = types[type];
  const email = {
    from: sender,
    to,
    subject,
    html
  };
  sendGridMail.send(email);
};

module.exports = sendEmail;