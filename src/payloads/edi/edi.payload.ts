import { AddressEntityInterface } from '../../entities/address/address.entity';
import { LineItemEntityInterface } from '../../entities/line-item/line-item.entity';

export type EdiPayloadShippingAddressDto = Required<
  Omit<AddressEntityInterface, 'company'>
>;

export type EdiPayloadLineItemDto = LineItemEntityInterface;

export interface EdiPayloadDto {
  poNumber: string;
  date: string;
  currency: string;
  email: string;
  shippingAddress: EdiPayloadShippingAddressDto;
  lineItems: EdiPayloadLineItemDto[];
}
