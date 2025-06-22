export enum Currency {
   USD = 'USD',
   EUR = 'EUR',
   RUB = 'RUB',
}

export type ProductData = {
   id: string;
   title: string;
   origin: string;
   price: number;
   currency: Currency;
   imageUrl: string;
};
