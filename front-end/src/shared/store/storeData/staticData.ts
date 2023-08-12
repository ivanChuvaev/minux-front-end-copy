/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes'
import { GpuStatic } from '../gpu';
import { CpuStatic } from '../cpu';
import { RamStatic} from '../ram';
import { HdStatic } from '../hd';
import { CalculationsStatic } from '../calculations';
import { motherboardStatic } from '../motherboard/types';

export const StaticData = rt.Record({
    gpu: rt.Array(GpuStatic),
    cpu: CpuStatic, 
    ram: rt.Array(RamStatic),
    motherboard: motherboardStatic,
    hd: rt.Array(HdStatic),
    calculations: CalculationsStatic
})
export type StaticData = rt.Static<typeof StaticData>;