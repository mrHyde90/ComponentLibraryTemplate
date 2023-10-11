/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import { type ICardData } from './FrontCard.types';
import CardImage from '../../assets/images/bg-card-front.png';
import styles from './FrontCard.module.css';
import { getNumberFormatByFormat } from '../../utils';
import { HOLDER_NUMBER_FORMAT, HOLDER_EXPIRATION_FORMAT } from '../../constants';

const INITIAL_PROPS: ICardData = {
  holderName: '',
  holderNumber: '',
  expirationDate: '',
};

export const FrontCard: React.FC<ICardData> = ({
  holderName = INITIAL_PROPS.holderName,
  holderNumber = INITIAL_PROPS.holderNumber,
  expirationDate = INITIAL_PROPS.expirationDate,
}) => {
  const formattedHolderNumber = useMemo(() => getNumberFormatByFormat(holderNumber, HOLDER_NUMBER_FORMAT), [holderNumber, HOLDER_NUMBER_FORMAT]);
  const formattedExpirationDate = useMemo(() => getNumberFormatByFormat(expirationDate, HOLDER_EXPIRATION_FORMAT), [expirationDate, HOLDER_EXPIRATION_FORMAT]);
  return (
    <div className={styles.container}>
      <div className={styles.containerCircles}>
        <span className={styles.firstCircle} />
        <span className={styles.secondCircle} />
      </div>
      <img
        src={CardImage}
        aria-label='famcy'
        className={styles.image}
      />
      <div className={styles.containerData}>
        <p
          role='paragraph'
          data-testid="holderNumber"
          className={styles.holderNumber}
        >
          {formattedHolderNumber}
        </p>
        <div className={styles.textContainer}>
          <p
            role='paragraph'
            data-testid="holderName"
            className={styles.holderName}
          >
            {holderName}
          </p>
          <p
            role='paragraph'
            data-testid="expirationDare"
            className={styles.expirationDare}
          >
            {formattedExpirationDate}
          </p>
      </div>
      </div>
    </div>
  );
};

export default FrontCard;
