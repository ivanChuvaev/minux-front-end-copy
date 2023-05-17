/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes';

export const Information = rt.Record({
    manufacturer: rt.Union(rt.String, rt.Null), 
    modelName: rt.Union(rt.String, rt.Null), 
    architecture: rt.Union(rt.String, rt.Null), 
    opModes: rt.Union(rt.String, rt.Null), 
    cores: rt.Record({ 
        cpus: rt.Union(rt.String, rt.Null), 
        threadsPerCore: rt.Union(rt.String, rt.Null), 
        threadsPerSocket: rt.Union(rt.String, rt.Null), 
        sockets: rt.Union(rt.String, rt.Null) 
    })
})

export const ClocksMhz = rt.Record({
    min: rt.Union(rt.Number, rt.Null),
    max: rt.Union(rt.Number, rt.Null),
})
export type ClocksMhz = rt.Static<typeof ClocksMhz>

export const CpuStatic = rt.Record({
    information: Information,
    clocksMhz: ClocksMhz
})
export type CpuStatic = rt.Static<typeof CpuStatic>