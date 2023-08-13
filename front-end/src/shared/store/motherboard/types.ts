/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes' 

export const Information = rt.Record({
    manufacturer: rt.Union(rt.String, rt.Null),
    productName: rt.Union(rt.String, rt.Null),
    serialNumber: rt.Union(rt.String, rt.Null), 
})
export type Information = rt.Static<typeof Information>

export const motherboardStatic = rt.Record({
    information: Information,
    sataSlots: rt.Union(rt.Number, rt.Null),
    pciSlots: rt.Union(rt.Number, rt.Null), 
    ramSlots: rt.Union(rt.Number, rt.Null), 
})
export type motherboardStatic = rt.Static<typeof motherboardStatic>;