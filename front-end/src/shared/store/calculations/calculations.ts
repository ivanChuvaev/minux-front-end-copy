/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'

export const Calculations = rt.Record({
    gpusAccepted: rt.Number,
    gpusRejected: rt.Number,
    gpusCount: rt.Number,
    gpusNvidia: rt.Number,
    gpusRadeon: rt.Number,
    gpusMiners: rt.Number,
    gpusAlgorithms: rt.Number,
    totalPower: rt.Number,
    totalRam: rt.Number
})

export type Calculations = rt.Static<typeof Calculations>