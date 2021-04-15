import { LineItemEntity } from '../../entities/line-item/line-item.entity';

type CreateLineItemDtoInterface = Pick<LineItemEntity, 'sku' | 'quantity'>;

export class CreateLineItemDto implements CreateLineItemDtoInterface {
  sku: string;
  quantity: number;
}
