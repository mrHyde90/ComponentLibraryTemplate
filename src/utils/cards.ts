import { getOnlyNumbersFromString, isNumber } from './numbers';

export const getNumberFormatByFormat = (holderNumber: string, format: string): string => {
  const numbers = getOnlyNumbersFromString(holderNumber); // 12345678
  const numbersArray: string[] = numbers.split(''); // ['1', '2', '3', '4', '5', '6', '7', '8']
  const numbersWithFormatArray: string[] = format.split(''); // ['0', '0', '0', '0', ' ', '0', '0', '0', '0', ' ']
  const numberArrayLength = numbersArray.length; // 8
  let indexInNumber: number = 0;
  const numbersWithFormat = numbersWithFormatArray.map((numberString: string) => {
    if (indexInNumber < numberArrayLength && isNumber(numberString)) {
      const numberToReturn = numbersArray[indexInNumber];
      indexInNumber = indexInNumber + 1;
      return numberToReturn;
    } else {
      return numberString;
    }
  });
  return numbersWithFormat.join('');
};
