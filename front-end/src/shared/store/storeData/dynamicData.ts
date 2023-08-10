/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'
import { GpuDynamic } from '../gpu';
import { CpuDynamic } from '../cpu';
import { RamDynamic } from '../ram';
import { HdDynamic } from '../hd';
import { Calculations } from '../calculations';

export const DynamicData = rt.Record({
    gpu: rt.Array(GpuDynamic),
    cpu: CpuDynamic, 
    ram: rt.Array(RamDynamic),
    hd: rt.Array(HdDynamic), 
    calculations: Calculations 
})
export type DynamicData = rt.Static<typeof DynamicData>;