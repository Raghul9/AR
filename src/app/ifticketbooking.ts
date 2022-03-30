import { Timestamp } from "rxjs";

export interface Ifticketbooking {
    fid:number;
    pid:number;
    tprice:number;
    payid:number;
    //bookingdatetime:Date;
    totalpassengers:number;
    status:string;
    emailid:string;
    fdate:Date
    seatid:number;
}
