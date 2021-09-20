import { OrderEntity } from '../order/order.entity';
import { AddressEntity } from '../address/address.entity';
import { BaseEntity, DatesEntity } from '../base.entity';
import { LineItemEntity } from '../line-item/line-item.entity';
import { ShipmentEntity } from '../shipment/shipment.entity';

export type FulfillmentOrderStatus =
  | 'scheduled' // One of two initial states: The Purchase Order is deferred until after the datetime specified in fulfill_at. @CreatedAt
  | 'open' // One of two initial states: The Purchase Order is ready to be fulfilled. @CreatedAt
  | 'cancelled' // PlumbHQ cancelled the Purchase Order. @CancelledAt
  | 'in_progress' // The Purchase Order is being fulfilled.
  | 'closed' // All shipments for the Purchase Order have finished. @ClosedAt
  | 'payment_scheduled' // The Purchase Order has been allocated to a Payout. @ScheduledAt
  | 'payment_allocated' // The associated Payout has been processed.
  | 'paid' // The associated Payout has been paid. @PaidAt
  | 'archived'; // The Purchase Order is now closed. No more tasks to complete. @ArchivedAt

export type FulfillmentOrderRequestStatus =
  | 'unsubmitted' // The initial state for a newly created FulfillmentOrder.
  | 'submitted' // PlumbHQ has sent the Purchase Order to the Supplier. @SubmittedAt
  | 'accepted' // The supplier accepted PlumbHQ's request. @AcceptedAt
  | 'rejected' // The supplier rejected PlumbHQ's request. @RejectedAt
  | 'cancellation_requested' // PlumbHQ has requested to cancel the Purchase Order
  | 'cancellation_accepted' // The supplier accepted PlumbHQ's request to cancel the Purchase Order
  | 'cancellation_rejected'; // The supplier rejected PlumbHQ's request to cancel the Purchase Order

export type FulfillmentOrderFulfillmentStatus =
  | 'unfulfilled' // Purchase Order is not fulfilled.
  | 'partially_fulfilled' // Purchase Order is partially complete
  | 'fulfilled'; // Purchase Order is complete.

export enum FulfillmentOrderStatusEnum {
  Scheduled = 'scheduled',
  Open = 'open',
  Cancelled = 'cancelled',
  InProgress = 'in_progress',
  Closed = 'closed',
  PaymentScheduled = 'payment_scheduled',
  PaymentAllocated = 'payment_allocated',
  Paid = 'paid',
  Archived = 'archived',
}

export enum FulfillmentOrderRequestStatusEnum {
  Unsubmitted = 'unsubmitted',
  Submitted = 'submitted',
  Accepted = 'accepted',
  Rejected = 'rejected',
  CancellationRequested = 'cancellation_requested',
  CancellationAccepted = 'cancellation_accepted',
  CancellationRejected = 'cancellation_rejected',
}

export enum FulfillmentOrderFulfillmentStatusEnum {
  Unfulfilled = 'unfulfilled',
  PartiallyFulfilled = 'partially_fulfilled',
  Fulfilled = 'fulfilled',
}

export type FulfillmentOrderRequestType =
  | 'FULFILLMENT_REQUEST'
  | 'CANCELLATION_REQUEST';

export enum FulfillmentOrderRequestTypeEnum {
  FulfillmentRequest = 'FULFILLMENT_REQUEST',
  CancellationRequest = 'CANCELLATION_REQUEST',
}

export type FulfillmentOrderSubmissionMethod =
  | 'EmailChannel'
  | 'WebhookChannel';

export enum FulfillmentOrderSubmissionMethodEnum {
  EmailChannel = 'EmailChannel',
  WebhookChannel = 'WebhookChannel',
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
  fulfillmentStatus: FulfillmentOrderFulfillmentStatus;
  submissionMethod?: FulfillmentOrderSubmissionMethod | null;

  createdAt?: string;
  submittedAt?: string;
  acceptedAt?: string;
  rejectedAt?: string;
  cancelledAt?: string;
  closedAt?: string;
  scheduledAt?: string;
  allocatedAt?: string;
  paidAt?: string;
  archivedAt?: string;

  payout?: string;
}

export type FulfillmentOrderEntity = BaseEntity &
  FulfillmentOrderEntityInterface &
  DatesEntity;
