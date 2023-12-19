const isValidEmail = (email) => {
  if (email === '') return false;
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isPasswordFilled = (password) => {
  return password !== '';
};

const isFilled = (value) => {
  return !!(value && value.trim() !== '');
};

const isEmpty = (obj) => Object.keys(obj).length === 0;

const isValidPasswordLength = (password) => {
  return password.length >= 8;
};

export {
  isPasswordFilled,
  isValidEmail,
  isFilled,
  isEmpty,
  isValidPasswordLength,
};
