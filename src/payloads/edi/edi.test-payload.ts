import { EdiPayloadDto } from './edi.payload';

export const TestEdiPayload = {
  date: '2021-04-20T13:32:10Z',
  poNumber: '1617-1392-6694-6273',
  currency: 'GBP',
  email: 'bob.norman@hostmail.com',
  shippingAddress: {
    firstName: 'Bob',
    lastName: 'Norman',
    address1: 'Chestnut Street 92',
    address2: null,
    city: 'London',
    province: 'Greater London',
    country: 'United Kingdom',
    postCode: 'SW8 9AS',
  },
  lineItems: [
    {
      sku: 'PHQ100089',
      description: 'Gate Valve 15mm',
      quantity: 1,
    },
  ],
} as EdiPayloadDto;
