import { OrderEntity } from '../order/order.entity';
import { AddressEntity } from '../address/address.entity';
import { BaseEntity, DatesEntity } from '../base.entity';
import { LineItemEntity } from '../line-item/line-item.entity';
import { ShipmentEntity } from '../shipment/shipment.entity';

export type FulfillmentOrderStatus =
  | 'scheduled' // The fulfillment order is deferred and will be ready for fulfillment after the datetime specified in fulfill_at.
  | 'open' // The fulfillment order is ready for fulfillment.
  | 'in_progress' // The fulfillment order is being processed.
  | 'cancelled' // The fulfillment order has been cancelled by PlumbHQ.
  | 'incomplete' // The fulfillment order cannot be completed as requested.
  | 'closed'; // The fulfillment order has been completed and closed.

export enum FulfillmentOrderStatusEnum {
  Scheduled = 'scheduled',
  Open = 'open',
  InProgress = 'in_progress',
  Cancelled = 'cancelled',
  Incomplete = 'incomplete',
  Closed = 'closed',
}

export type FulfillmentOrderRequestStatus =
  | 'unsubmitted' // The initial state for a newly created FulfillmentOrder.
  | 'submitted' // PlumbHQ has requested fulfillment from the supplier but they have not responded.
  | 'accepted' // The supplier accepted the PlumbHQ's request.
  | 'rejected'; // The supplier rejected the PlumbHQ's request.

export enum FulfillmentOrderRequestStatusEnum {
  Unsubmitted = 'unsubmitted',
  Submitted = 'submitted',
  Accepted = 'accepted',
  Rejected = 'rejected',
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

export class FulfillmentOrderEntityInterface {
  uuid: string;
  email: string;
  destination: AddressEntity;
  order?: string | OrderEntity;
  lineItems: LineItemEntity[];
  shipments: ShipmentEntity[];
  status: FulfillmentOrderStatus;
  requestStatus: FulfillmentOrderRequestStatus;
  submittedAt?: string | null;
  submissionMethod?: FulfillmentOrderSubmissionMethod | null;
  closedAt?: string;
  payout?: string;
}

export type FulfillmentOrderEntity = BaseEntity &
  FulfillmentOrderEntityInterface &
  DatesEntity;
