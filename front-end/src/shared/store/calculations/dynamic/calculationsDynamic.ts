/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'

export const CalculationsDynamic = rt.Record({
    gpusAccepted: rt.Number,
    gpusRejected: rt.Number, 
    gpusAlgorithms: rt.Number,
    gpusMiners: rt.Number,
    totalPower: rt.Number,
    totalRam: rt.Number
})

export type CalculationsDynamic = rt.Static<typeof CalculationsDynamic>