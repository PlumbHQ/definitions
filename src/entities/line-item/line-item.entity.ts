import { BaseEntity } from '../base.entity';

export class LineItemEntityInterface {
  sku: string;
  description: string;
  quantity: number;
}

export type LineItemEntity = BaseEntity & LineItemEntityInterface;
