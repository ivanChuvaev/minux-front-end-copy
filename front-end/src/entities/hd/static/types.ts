/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'

export const Information = rt.Record({
    description: rt.Union(rt.String, rt.Null),
    product: rt.Union(rt.String, rt.Null),
    vendor: rt.Union(rt.String, rt.Null),
    busInfo: rt.Union(rt.String, rt.Null),
    logicalName: rt.Union(rt.String, rt.Null),
    serial: rt.Union(rt.String, rt.Null),
    width: rt.Union(rt.Number, rt.Null),
    clockMhz: rt.Union(rt.Number, rt.Null)   
});
export type Information = rt.Static<typeof Information>

export const HdStatic = rt.Record({
    uuid: rt.Union(rt.String, rt.Null), 
    capacityB: rt.Union(rt.Number, rt.Null),
    information: Information
})
export type HdStatic = rt.Static<typeof HdStatic>;