import { BaseEntity } from '../base.entity';

export class LineItemEntityInterface {
  sku: string;
  description: string;
  quantity: number;
  price?: number;
  cost?: number;
}

export type LineItemEntity = BaseEntity & LineItemEntityInterface;
