import { AddressEntity } from '../address/address.entity';
import { BaseEntity } from '../base.entity';
import { LineItemEntity } from '../line-item/line-item.entity';
import { ShipmentEntity } from '../shipment/shipment.entity';

export type FulfillmentOrderStatus =
  | 'open' // The fulfillment order is ready for fulfillment.
  | 'in_progress' // The fulfillment order is being processed.
  | 'scheduled' // The fulfillment order is deferred and will be ready for fulfillment after the datetime specified in fulfill_at.
  | 'cancelled' // The fulfillment order has been cancelled by the merchant.
  | 'incomplete' // The fulfillment order cannot be completed as requested.
  | 'closed'; // The fulfillment order has been completed and closed.

export enum FulfillmentOrderStatusEnum {
  Open = 'open',
  InProgress = 'in_progress',
  Scheduled = 'scheduled',
  Cancelled = 'cancelled',
  Incomplete = 'incomplete',
  Closed = 'closed',
}

export type FulfillmentOrderRequestStatus =
  | 'unsubmitted' // The initial state for newly created fulfillment orders. This is the only valid state for fulfillment orders not assigned to a fulfillment service.
  | 'submitted' // The merchant requested fulfillment for this fulfillment order.
  | 'accepted' // The fulfillment service accepted the merchant's fulfillment request.
  | 'rejected' // The fulfillment service rejected the merchant's fulfillment request.
  | 'closed'; // The fulfillment service closed the fulfillment order without completing it.

export enum FulfillmentOrderRequestStatusEnum {
  Unsubmitted = 'unsubmitted',
  Submitted = 'submitted',
  Accepted = 'accepted',
  Rejected = 'rejected',
  Closed = 'closed',
}

export type FulfillmentOrderRequestType =
  | 'FULFILLMENT_REQUEST'
  | 'CANCELLATION_REQUEST';

export enum FulfillmentOrderRequestTypeEnum {
  FulfillmentRequest = 'FULFILLMENT_REQUEST',
  CancellationRequest = 'CANCELLATION_REQUEST',
}

export type FulfillmentOrderSubmissionMethod =
  | 'webhook-notification'
  | 'edi-email'
  | 'edi-webhook';

export enum FulfillmentOrderSubmissionMethodEnum {
  WebhookNotification = 'webhook-notification',
  EdiEmail = 'edi-email',
  EdiWebhook = 'edi-webhook',
}

export class FulfillmentOrderEntity extends BaseEntity {
  uuid: string;
  type: FulfillmentOrderRequestType;
  email: string;
  destination: AddressEntity;
  lineItems: LineItemEntity[];
  shipments: ShipmentEntity[];
  status: FulfillmentOrderStatus;
  requestStatus: FulfillmentOrderRequestStatus;
  submittedAt?: string | null;
  submissionMethod?: FulfillmentOrderSubmissionMethod | null;
}
