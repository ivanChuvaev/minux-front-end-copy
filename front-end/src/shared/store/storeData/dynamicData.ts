/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'
import { GpuDynamic } from '../gpu';
import { CpuDynamic } from '../cpu';
import { RamDynamic } from '../ram';
import { HdDynamic } from '../hd';
import { CalculationsDynamic } from '../calculations';

export const DynamicData = rt.Record({
    state: rt.Record({mining: rt.Boolean}),
    gpu: rt.Array(GpuDynamic),
    cpu: CpuDynamic, 
    ram: rt.Array(RamDynamic),
    hd: HdDynamic, 
    calculations: CalculationsDynamic 
})
export type DynamicData = rt.Static<typeof DynamicData>;