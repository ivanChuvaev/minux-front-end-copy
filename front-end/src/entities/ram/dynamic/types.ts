/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'

export const RamDynamic = rt.Record({
    uuid: rt.Union(rt.String, rt.Null),
    totalB: rt.Union(rt.Number, rt.Null), 
    availableB: rt.Union(rt.Number, rt.Null),
    freeB: rt.Union(rt.Number, rt.Null),
    usedB: rt.Union(rt.Number, rt.Null)   
})
export type RamDynamic = rt.Static<typeof RamDynamic>;