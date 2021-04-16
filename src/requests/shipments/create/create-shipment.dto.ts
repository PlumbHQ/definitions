import {
  ShipmentEntity,
  ShipmentTrackingCompany,
} from '../../../entities/shipment/shipment.entity';
import { CreateLineItemDto } from '../../shared/create-line-item.dto';

type CreateShipmentDtoInterface = Required<
  Pick<
    ShipmentEntity,
    'clientRef' | 'notifyCustomer' | 'trackingCompany' | 'trackingNumber'
  > & { lineItems: CreateLineItemDto[] }
>;

export class CreateShipmentDto implements CreateShipmentDtoInterface {
  clientRef: string;
  notifyCustomer: boolean;
  trackingCompany: ShipmentTrackingCompany;
  trackingNumber: string;
  lineItems: CreateLineItemDto[];
}
