
export interface ICardData {
  /**
   * The name of the owner
   */
  holderName: string
  holderNumber: string
  expirationDare: string
}

export interface FrontCardProps {
  cardData: ICardData
}
