import type { Model, Response } from './models';

export type SubscriptionInvoiceStatus = 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';

export interface SubscriptionInvoiceCommon {
  subscriptionId: string;
  status: SubscriptionInvoiceStatus;
  raw: any;
}

export interface SubscriptionInvoice extends SubscriptionInvoiceCommon, Model {}
export interface SubscriptionInvoiceResponse extends SubscriptionInvoiceCommon, Response {}
