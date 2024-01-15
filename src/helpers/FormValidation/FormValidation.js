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

const arrayEmpty = (arr) => arr.length === 0;

const arrayOnlyNumber = (arr) => arr.every((i) => isPositiveInteger(i));

const isValidPasswordLength = (password) => {
  return password.length >= 8;
};

const isValidDateTime = (date) => {
  if (date.format('YYYY-MM-DD HH:mm:ss') === 'Invalid Date') {
    return false;
  }
  return true;
};

const isPositiveInteger = (string) => {
  return !isNaN(string) && Number.isInteger(Number(string)) && string > 0;
};

const isImage = (string) => {
  console.log(string.includes('image/'));
  return string.includes('image/');
};

export {
  isPasswordFilled,
  isValidEmail,
  isFilled,
  isEmpty,
  arrayEmpty,
  arrayOnlyNumber,
  isValidPasswordLength,
  isValidDateTime,
  isPositiveInteger,
  isImage,
};
