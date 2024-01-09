function validation(values) {

    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      errors.email = "O e-mail não deve estar vazio.";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "O e-mail não corresponde ao formato esperado.";
    } else {
      errors.email = "";
    }
  
    if (values.password === "") {
      errors.password = "A senha não pode estar vazia.";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.";
    } else {
      errors.password = "";
    }


    if (errors.email || errors.password) {
        alert("Por favor, corrija os erros no formulário antes de enviar.");
      }
  
    return errors;
  }
  
  export default validation;
  