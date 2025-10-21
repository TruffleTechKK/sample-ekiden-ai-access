import type { ID, Model, Response } from './models';

export type PurchaseStatus =
  | 'canceled'
  | 'processing'
  | 'requires_action'
  | 'requires_capture'
  | 'requires_confirmation'
  | 'requires_payment_method'
  | 'succeeded';

export interface PurchaseCommon {
  id: ID;
  userId: ID;
  coachId: ID;
  planId: ID;

  stripeProductId: string;
  stripePriceId: string;
  stripeInvoiceId: string;
  stripePaymentIntentId: string;

  status: PurchaseStatus;

  raw: any;
}

export interface Purchase extends PurchaseCommon, Model {}
export interface PurchaseResponse extends PurchaseCommon, Response {}
