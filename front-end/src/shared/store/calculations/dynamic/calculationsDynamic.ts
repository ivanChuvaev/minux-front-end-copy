/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'

export const CoinsValue = rt.Record({
    coin: rt.String,
    algorithm: rt.String,
    value: rt.Number
})
export type CoinsValue = rt.Static<typeof CoinsValue>

export const CalculationsDynamic = rt.Record({
    coinsValue: rt.Array(CoinsValue),
    gpusAccepted: rt.Number,    
    gpusRejected: rt.Number, 
    gpusAlgorithms: rt.Number,
    gpusMiners: rt.Number,
    totalPower: rt.Number,
    totalRam: rt.Number
})

export type CalculationsDynamic = rt.Static<typeof CalculationsDynamic>