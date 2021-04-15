import {
  ShipmentEntity,
  ShipmentTrackingCompany,
} from '../../entities/shipment/shipment.entity';
import { CreateLineItemDto } from '../shared/create-line-item.dto';

type CreateShipmentControllerDtoInterface = Pick<
  ShipmentEntity,
  'clientRef' | 'notifyCustomer' | 'trackingCompany' | 'trackingNumber'
> & { lineItems: CreateLineItemDto[] };

export class CreateShipmentControllerDto
  implements CreateShipmentControllerDtoInterface {
  clientRef: string;
  notifyCustomer: boolean;
  trackingCompany: ShipmentTrackingCompany;
  trackingNumber: string;
  lineItems: CreateLineItemDto[];
}
