const duiValidator = (dui: string) => { 
  if (!new RegExp(/[0-9]{9}/i).test(dui)) return false;
  const duiArr = dui.split('').map(Number);
  const validator = duiArr.pop();
  let sum = 0;
  duiArr.forEach((digit, index) => {
    sum += digit * (9 - index);
  });
  const mod = sum % 10;
  if (mod === 0) return validator === 0;
  return validator === 10 - mod;
}

export default duiValidator;