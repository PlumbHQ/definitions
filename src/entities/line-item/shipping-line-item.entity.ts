import { BaseEntity } from '../base.entity';

export class ShippingLineEntityInterface {
  id?: string;
  description: string;
  price: number;
}

export type ShippingLineEntity = BaseEntity & ShippingLineEntityInterface;
