/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes' 

export const Informations = rt.Record({
    manufacturer: rt.Union(rt.String, rt.Null),
    periphery: rt.Union(rt.String, rt.Null),
    architecture: rt.Union(rt.String, rt.Null),
    driverVersion: rt.Union(rt.String, rt.Null),
    cudaVersion: rt.Union(rt.String, rt.Null), 
    productArchitecture: rt.Union(rt.String, rt.Null),
    serialNumber: rt.Union(rt.String, rt.Null), 
    pci: rt.Record({ 
        bus: rt.Union(rt.String, rt.Null), 
        deviceId: rt.Union(rt.String, rt.Null), 
        busId: rt.Union(rt.String, rt.Null) 
    })
})
export type Informations = rt.Static<typeof Informations>

export const TemperatureCelsius = rt.Record({
    shutdown: rt.Union(rt.Number, rt.Null), 
    maxOperating: rt.Union(rt.Number, rt.Null), 
})
export type TemperatureCelsius = rt.Static<typeof TemperatureCelsius>

export const MemoryMb = rt.Record({
    total: rt.Union(rt.Number, rt.Null)
})
export type MemoryMb = rt.Static<typeof MemoryMb>

export const PowerWatt = rt.Record({
    defaultLimit: rt.Union(rt.Number, rt.Null), 
    enforcedLimit: rt.Union(rt.Number, rt.Null), 
    minimal: rt.Union(rt.Number, rt.Null),
    maximum: rt.Union(rt.Number, rt.Null)
})
export type PowerWatt = rt.Static<typeof PowerWatt>

export const ClocksMhz = rt.Record({
    coreMin: rt.Union(rt.Number, rt.Null), 
    coreMax: rt.Union(rt.Number, rt.Null), 
    memMin: rt.Union(rt.Number, rt.Null), 
    memMax: rt.Union(rt.Number, rt.Null)
})
export type ClocksMhz = rt.Static<typeof ClocksMhz>

export const GpuStatic = rt.Record({
    uuid: rt.Union(rt.String, rt.Null),
    information: Informations,
    temperatureCelsius: TemperatureCelsius,
    memoryMb: MemoryMb,
    powerWatt: PowerWatt,
    clocksMhz: ClocksMhz
})
export type GpuStatic = rt.Static<typeof GpuStatic>