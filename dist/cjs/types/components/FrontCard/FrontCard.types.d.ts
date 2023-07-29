export interface ICardData {
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
export interface FrontCardProps {
    cardData: ICardData;
}
