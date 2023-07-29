export const getOnlyNumbersFromString = (stringCharacters: string): string => {
  const numerosEncontrados = stringCharacters.match(/\d+/g);
  const resultado = (numerosEncontrados != null) ? numerosEncontrados.join('') : '';
  return resultado;
};

export const isNumber = (character: string): boolean => {
  return /^[0-9]$/.test(character);
};
