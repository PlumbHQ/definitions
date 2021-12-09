import { BaseEntity } from '../base.entity';

export class ShippingLineEntityInterface {
  code?: string;
  description: string;
  price: number;
}

export type ShippingLineEntity = BaseEntity & ShippingLineEntityInterface;
