/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes';

const Shared = rt.Record({
  accepted: rt.Union(rt.Number, rt.Null),
  rejected: rt.Union(rt.Number, rt.Null),
});
export type Shared = typeof Shared;

export const MemoryMb = rt.Record({
  reserved: rt.Union(rt.Number, rt.Null),
  used: rt.Union(rt.Number, rt.Null),
  free: rt.Union(rt.Number, rt.Null),
});
export type MemoryMb = rt.Static<typeof MemoryMb>;

export const ClocksMhz = rt.Record({
  graphics: rt.Union(rt.Number, rt.Null),
  sm: rt.Union(rt.Number, rt.Null),
  memory: rt.Union(rt.Number, rt.Null),
  video: rt.Union(rt.Number, rt.Null),
});
export type ClocksMhz = rt.Static<typeof ClocksMhz>;

export const VoltageMv = rt.Record({
  graphics: rt.Union(rt.Number, rt.Null),
});
export type VoltageMv = rt.Static<typeof VoltageMv>;

export const GpuDynamic = rt.Record({
  uuid: rt.Union(rt.String, rt.Null),
  temperatureCelcius: rt.Union(rt.Number, rt.Null),
  fanSpeedPercentage: rt.Union(rt.Number, rt.Null),
  hashrateMg: rt.Union(rt.Number, rt.Null),
  powerUsage: rt.Union(rt.Number, rt.Null),
  algorithm: rt.Union(rt.String, rt.Null),
  cryptocurrency: rt.Union(rt.String, rt.Null),
  shared: Shared,
  memoryMb: MemoryMb,
  clocksMhz: ClocksMhz,
  voltageMv: VoltageMv,
});
export type GpuDynamic = rt.Static<typeof GpuDynamic>;
