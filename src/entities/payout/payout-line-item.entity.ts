export class PayoutLineItemInterface {
  fulfillmentOrder: string;
  value: number;
  fees: number;
}

export type PayoutLineItemEntity = PayoutLineItemInterface;
