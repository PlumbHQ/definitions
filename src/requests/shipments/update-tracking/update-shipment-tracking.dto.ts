import {
  ShipmentEntity,
  ShipmentTrackingCompany,
} from '../../../entities/shipment/shipment.entity';

type UpdateShipmentTrackingDtoInterface = Required<
  Pick<ShipmentEntity, 'notifyCustomer' | 'trackingCompany' | 'trackingNumber'>
>;

export class UpdateShipmentTrackingDto
  implements UpdateShipmentTrackingDtoInterface {
  notifyCustomer: boolean;
  trackingCompany: ShipmentTrackingCompany;
  trackingNumber: string;
}
