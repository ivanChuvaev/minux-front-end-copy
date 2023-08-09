/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'
import { GpuStatic } from '../gpu';
import { CpuStatic } from '../cpu';
import { RamStatic} from '../ram';
import { HdStatic } from '../hd';

export const StaticData = rt.Record({
    gpu: rt.Array(GpuStatic),
    cpu: CpuStatic, 
    ram: rt.Array(RamStatic),
    hd: rt.Array(HdStatic)  
})
export type StaticData = rt.Static<typeof StaticData>;