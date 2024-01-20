let number = 0

export const setRuntimeHelper = (num) => {
  number = num;
  console.log('setRuntimeHelper');
};

export const runtimeHelper = () => {
  console.log('runtimeHelper');
  if (!number) {
    throw new Error('Parameter Exception');
  }
  return number;
};