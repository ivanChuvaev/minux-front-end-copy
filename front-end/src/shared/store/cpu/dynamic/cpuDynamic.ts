/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes';

export const Shares = rt.Record({
    accepted: rt.Union(rt.Number, rt.Null),
    rejected: rt.Union(rt.Number, rt.Null)
});
export type shares = rt.Static<typeof Shares>

export const Cores = rt.Record({
    temperature: rt.Union(rt.Number, rt.Null), 
    usrPercentage: rt.Union(rt.Number, rt.Null),
    nicePercentage: rt.Union(rt.Number, rt.Null),
    sysPercentage: rt.Union(rt.Number, rt.Null),
    iowaitPercentage: rt.Union(rt.Number, rt.Null),
    irgPercentage: rt.Union(rt.Number, rt.Null),
    softPercentage: rt.Union(rt.Number, rt.Null),
    stealPercentage: rt.Union(rt.Number, rt.Null),
    guestPercentage: rt.Union(rt.Number, rt.Null),
    gnicePercentage: rt.Union(rt.Number, rt.Null),
    idlePercentage: rt.Union(rt.Number, rt.Null),
})
export type Cores = rt.Static<typeof Cores>

export const CpuDynamic = rt.Record({
    temperatureCelcius: rt.Union(rt.Number, rt.Null),
    fanSpeedPercentage: rt.Union(rt.Number, rt.Null),
    clockSpeed: rt.Union(rt.Number, rt.Null),
    hashrateMg: rt.Union(rt.Number, rt.Null),
    powerUsage: rt.Union(rt.Number, rt.Null),
    algorithm: rt.Union(rt.String, rt.Null),
    cryptocurrency: rt.Union(rt.String, rt.Null),
    shares: Shares,
    cores: rt.Array(Cores)
}) 
export type CpuDynamic = rt.Static<typeof CpuDynamic>