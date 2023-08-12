/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'

export const Cores = rt.Record({
    cpus: rt.Union(rt.Number, rt.Null),
    threadsPerCore: rt.Union(rt.Number, rt.Null),
    threadsPerSocket: rt.Union(rt.Number, rt.Null),
    sockets: rt.Union(rt.Number, rt.Null)
}) 
export type Cores = rt.Static<typeof Cores>

export const Information = rt.Record({
    manufacturer: rt.Union(rt.String, rt.Null),
    modelName: rt.Union(rt.String, rt.Null),
    architecture: rt.Union(rt.String, rt.Null),
    opModes: rt.Union(rt.String, rt.Null),
    cores: Cores
})
export type Information = rt.Static<typeof Cores>

export const motherboardStatic = rt.Record({
    uuid: rt.Union(rt.String, rt.Null),
    temperatureCelcius: rt.Union(rt.Number, rt.Null), 
    capacityB: rt.Union(rt.Number, rt.Null),
    availableB: rt.Union(rt.Number, rt.Null),
    freeB: rt.Union(rt.Number, rt.Null)   
})
export type motherboardStatic = rt.Static<typeof motherboardStatic>;