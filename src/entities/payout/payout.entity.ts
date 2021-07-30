import { sumBy } from 'lodash';
import { BaseEntity, DatesEntity } from '../base.entity';
import { PayoutLineItemEntity } from './payout-line-item.entity';

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
  paid: boolean;
  fulfillmentPartner: string;
  lineItems: PayoutLineItemEntity[];
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
export class PayoutEntity extends PayoutInterface {
  /**
   * Return the gross value of the Payout
   * @returns {number}
   */
  getGrossValue(): number {
    return sumBy(this.lineItems, 'value');
  }

  /**
   * Return the total fees of the Payout
   * @returns {number}
   */
  getTotalFees(): number {
    return sumBy(this.lineItems, 'fees');
  }

  /**
   * Return the net value of the Payout
   * @returns {number}
   */
  getNetValue(): number {
    return this.getGrossValue() - this.getTotalFees();
  }
}
