import { type ICardData } from '../components/FrontCard/FrontCard.types';

export const frontCardArgs: ICardData = {
  holderNumber: 'l',
  holderName: 'felicia leire',
  expirationDare: '',
};

export const defaultValuesFormat: ICardData = {
  holderNumber: '0000 0000 0000 0000',
  holderName: '',
  expirationDare: '00/00',
};

export const frontCardWithSomeValues: ICardData = {
  holderNumber: '88881290',
  holderName: '',
  expirationDare: '08',
};

export const frontCardFormatSomeValues: ICardData = {
  holderNumber: '8888 1290 0000 0000',
  holderName: '',
  expirationDare: '08/00',
};

export const frontCardWithAllValues: ICardData = {
  holderNumber: '8888129033446677',
  holderName: 'Jose Torres',
  expirationDare: '0889',
};

export const frontCardFormatAllValues: ICardData = {
  holderNumber: '8888 1290 3344 6677',
  holderName: 'Jose Torres',
  expirationDare: '08/89',
};

export const frontCardWithWrongValues: ICardData = {
  holderNumber: '8888    ***// 9977',
  holderName: '',
  expirationDare: '08***(///79',
};

export const frontCardFormatWrongValues: ICardData = {
  holderNumber: '8888 9977 0000 0000',
  holderName: '',
  expirationDare: '08/79',
};
