import { AddressEntityInterface } from '../../entities/address/address.entity';
import { LineItemEntityInterface } from '../../entities/line-item/line-item.entity';

export interface EdiPayload {
  poNumber: string;
  date: string;
  currency: string;
  email: string;
  shippingAddress: Required<Omit<AddressEntityInterface, 'company'>>;
  lineItems: LineItemEntityInterface[];
}
