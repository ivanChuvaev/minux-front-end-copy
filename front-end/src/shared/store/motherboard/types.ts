/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes' 

export const Information = rt.Record({
    manufacturer: rt.Union(rt.String, rt.Null),
    productName: rt.Union(rt.String, rt.Null),
    serialNumber: rt.Union(rt.String, rt.Null), 
})
export type Information = rt.Static<typeof Information>

export const RamSlots = rt.Record({
    type: rt.Union(rt.String, rt.Null),
    speed: rt.Union(rt.Number, rt.Null),
    capacity: rt.Union(rt.Number, rt.Null), 
})
export type RamSlots = rt.Static<typeof RamSlots>

export const motherboardStatic = rt.Record({
    uuid: rt.Union(rt.String, rt.Null),
    information: Information,
    ramSlots: RamSlots, 
    sataPorts: rt.Union(rt.String, rt.Null),
    pciSlots: rt.Union(rt.String, rt.Null), 
})
export type motherboardStatic = rt.Static<typeof motherboardStatic>;