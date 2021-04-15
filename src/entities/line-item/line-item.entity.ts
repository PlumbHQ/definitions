import { BaseEntity } from '../base.entity';

export class LineItemEntity extends BaseEntity {
  sku: string;
  description: string;
  quantity: number;
}