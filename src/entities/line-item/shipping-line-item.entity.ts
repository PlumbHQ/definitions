import { BaseEntity } from '../base.entity';

export class ShippingLineEntityInterface {
  sku?: string;
  description: string;
  price: number;
}

export type ShippingLineEntity = BaseEntity & ShippingLineEntityInterface;
