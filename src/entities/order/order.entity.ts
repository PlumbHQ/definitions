import { BaseEntity, DatesEntity } from '../base.entity';

export class OrderEntityInterface {
  uuid: string; // Internal generated UUID for the order
}

export type OrderEntity = BaseEntity & OrderEntityInterface & DatesEntity;
