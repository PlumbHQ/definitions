import { BaseEntity } from '../base.entity';

export class AddressEntityInterface extends BaseEntity {
  company?: string;
  firstName?: string;
  lastName?: string;
  address1: string;
  address2?: string;
  city: string;
  province?: string;
  postCode: string;
  country: string;
}

export type AddressEntity = BaseEntity & AddressEntityInterface;
