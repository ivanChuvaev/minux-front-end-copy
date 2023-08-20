/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'

export const HdDynamic = rt.Record({
    uuid: rt.Union(rt.String, rt.Null),
    temperatureCelcius: rt.Union(rt.Number, rt.Null), 
    capacityB: rt.Union(rt.Number, rt.Null), 
    freeB: rt.Union(rt.Number, rt.Null)   
})
export type HdDynamic = rt.Static<typeof HdDynamic>;