import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: React.FC<ButtonProps>;

interface ICardData {
    /**
     * The name of the owner
     */
    holderName: string;
    /**
     * The number of the owner
     */
    holderNumber: string;
    expirationDare: string;
}
interface FrontCardProps {
    cardData: ICardData;
}

declare const FrontCard: React.FC<FrontCardProps>;

export { Button, FrontCard };
