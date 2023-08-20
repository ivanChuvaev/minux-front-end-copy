/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes';

export const Shares = rt.Record({
    accepted: rt.Union(rt.Number, rt.Null),
    rejected: rt.Union(rt.Number, rt.Null)
});
export type shares = rt.Static<typeof Shares> 

export const CpuDynamic = rt.Record({ 
    temperatureCelcius: rt.Union(rt.Number, rt.Null),
    fanSpeedPercentage: rt.Union(rt.Number, rt.Null),
    clockSpeed: rt.Union(rt.Number, rt.Null),
    hashrateMg: rt.Union(rt.Number, rt.Null),
    powerUsage: rt.Union(rt.Number, rt.Null),
    algorithm: rt.Union(rt.String, rt.Null),
    miner: rt.Union(rt.String, rt.Null),
    cryptocurrency: rt.Union(rt.String, rt.Null),
    minerUpTime: rt.Union(rt.String, rt.Null),
    shares: Shares
}) 
export type CpuDynamic = rt.Static<typeof CpuDynamic>