import { BaseEntity } from '../base.entity';

export class OrderEntityInterface {
  uuid: string; // Internal generated UUID for the order
  shopName: string; // Shopify Name of the Order
}

export type OrderEntity = BaseEntity & OrderEntityInterface;
