const simpleTextInputValidation = (
  value: string,
  name: string
): string | undefined => {
  let error;
  if (!value) {
    error = `${name} is required!`;
  }
  return error;
};

const countDecimals = (value: number) => {
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1]?.length || 0;
};

export const validateName = (value: string): string | undefined => {
  return simpleTextInputValidation(value, "Name");
};

export const validateEAN = (value: number): string | undefined => {
  let error;
  if (!value) {
    error = "EAN is required!";
  } else if (value.toString().length !== 13 && value.toString().length !== 12) {
    error = "EAN must be 12 or 13 digits long!";
  }
  return error;
};

export const validateType = (value: string): string | undefined => {
  return simpleTextInputValidation(value, "Type");
};

export const validateWeight = (value: number): string | undefined => {
  let error;
  if (!value || value === 0) {
    error = "Weight is required!";
  }
  return error;
};

export const validateColor = (value: string): string | undefined => {
  return simpleTextInputValidation(value, "Color");
};

export const validateQuantity = (value: number): string | undefined => {
  let error;
  const length: number = value ? countDecimals(value) : 0;
  if (!value && value !== 0) {
    error = "Quantity is required!";
  } else if (length > 0 || value < 0) {
    error = "Entered quantity is not valid!";
  }
  return error;
};

export const validatePrice = (value: number): string | undefined => {
  let error;
  const length: number = value ? countDecimals(value) : 0;
  if (!value || value === 0) {
    error = "Price is required!";
  } else if (length > 2 || value < 0) {
    error = "Entered price is not valid!";
  }
  return error;
};
