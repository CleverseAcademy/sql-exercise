export default interface Schema {
  c_id: number;
  c_d_id: number;
  c_w_id: number;
  c_first: string;
  c_middle: string;
  c_last: string;
  c_street_1: string;
  c_street_2: string;
  c_city: string;
  c_state: string;
  c_zip: string;
  c_phone: string;
  c_since: Date;
  c_credit: string;
  c_credit_lim: number;
  c_discount: number;
  c_balance: number;
  c_ytd_payment: number;
  c_payment_cnt: number;
  c_delivery_cnt: number;
  c_data: string;
}
