export const createCorrectionFormatForInput = (string: string | null) => {
  if (string === null) return '';
  return string.split('.').reverse().join('.').replace(/\./g, '-');
};
