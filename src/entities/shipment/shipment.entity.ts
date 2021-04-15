import { AddressEntity } from "../address/address.entity";
import { BaseEntity } from "../base.entity";
import { LineItemEntity } from "../line-item/line-item.entity";

export type ShipmentEntityStatus =
  | 'pending' // The shipment is pending.
  | 'open' // The shipment has been acknowledged by the fulfillment partner and is in processing.
  | 'success' // The shipment was successful.
  | 'cancelled' // The shipment was cancelled.
  | 'error' // There was an error with the shipment request.
  | 'failure'; // The shipment request failed.

export enum ShipmentEntityStatusEnum {
  Pending = 'pending',
  Open = 'open',
  Success = 'success',
  Cancelled = 'cancelled',
  Error = 'error',
  Failure = 'failure',
}

export type ShipmentTrackingCompany =
  | '4PX'
  | 'Amazon Logistics UK'
  | 'Amazon Logistics US'
  | 'Anjun Logistics'
  | 'APC'
  | 'Australia Post'
  | 'Bluedart'
  | 'Canada Post'
  | 'Canpar'
  | 'China Post'
  | 'Chukou1'
  | 'Correios'
  | 'Couriers Please'
  | 'Delhivery'
  | 'DHL eCommerce'
  | 'DHL eCommerce Asia'
  | 'DHL Express'
  | 'DPD'
  | 'DPD Local'
  | 'DPD UK'
  | 'Eagle'
  | 'FedEx'
  | 'FSC'
  | 'Globegistics'
  | 'GLS'
  | 'GLS (US)'
  | 'Japan Post'
  | 'La Poste'
  | 'New Zealand Post'
  | 'Newgistics'
  | 'PostNL'
  | 'PostNord'
  | 'Purolator'
  | 'Royal Mail'
  | 'Sagawa'
  | 'Sendle'
  | 'SF Express'
  | 'SFC Fulfilllment'
  | 'Singapore Post'
  | 'StarTrack'
  | 'TNT'
  | 'Toll IPEC'
  | 'UPS'
  | 'USPS'
  | 'Whistl'
  | 'Yamato'
  | 'YunExpress';

export class ShipmentEntity extends BaseEntity {
  clientRef: string;
  destination: AddressEntity;
  fulfillmentOrder: string;
  notifyCustomer: boolean;
  trackingCompany: ShipmentTrackingCompany;
  trackingNumber: string;
  lineItems: LineItemEntity[];
  status: ShipmentEntityStatus;
  createdAt: string;
  updatedAt: string;
}