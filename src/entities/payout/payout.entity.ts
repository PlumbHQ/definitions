import { BaseEntity, DatesEntity } from '../base.entity';
import { PayoutLineItemEntity } from './payout-line-item.entity';

export type PayoutStatus = 'prepared' | 'locked' | 'scheduled' | 'paid';
export enum PayoutStatusEnum {
  Prepared = 'prepared',
  Locked = 'locked',
  Scheduled = 'scheduled',
  Paid = 'paid',
}

/**
 * PayoutInterface
 * @property {string} uuid
 * @property {string} startDate
 * @property {string} endDate
 * @property {boolean} paid
 * @property {EntityId | FulfillmentPartnerEntity} fulfillmentPartner
 */
export class PayoutInterface extends BaseEntity implements DatesEntity {
  uuid?: string; // Internal generated UUID for the order
  date: string;
  status: PayoutStatus;
  fulfillmentPartner: string;
  lineItems: PayoutLineItemEntity[];

  paymentMetaData?: {
    reference: string;
    sortCode: string;
    lastFour: string;
  };

  lockedAt?: string;
  scheduledAt?: string;
  paidAt?: string;
  archivedAt?: string;

  createdAt: string;
  updatedAt: string;
}

/**
 * PayoutEntity
 * @property {string} uuid
 * @property {string} startDate
 * @property {string} endDate
 * @property {boolean} paid
 * @property {EntityId | FulfillmentPartnerEntity} fulfillmentPartner
 */
export type PayoutEntity = PayoutInterface;
