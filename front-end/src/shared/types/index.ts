import { getStaticCPU, getStaticGPUList } from "@shared/api";
import { useStateObj } from "@shared/lib";

export type TStateObj<T> = ReturnType<typeof useStateObj<T>>

export type TStaticCPU = Awaited<ReturnType<typeof getStaticCPU>>
export type TStaticGPU = Awaited<ReturnType<typeof getStaticGPUList>>['list'][number]

export type TCryptocurrency = { id: number, name: string, fullName: string, algorithmId: number }
export type TPool = { id: number, host: string, port: number, cryptocurrencyId: number }
export type TWallet = { id: number, name: string, source: string, address: string, cryptocurrencyId: number }
export type TAlgorithm = { id: number, name: string }
export type TMiner = { id: number, name: string, fullName: string }
export type TFlightSheet = { id: number, name: string, cryptocurrency_id: number, wallet_id: number, miner_id: number, pool_id: number }

export type TWalletFilled = { id: number, name: string, source: string, address: string, cryptocurrency: TCryptocurrency }
export type TFlightSheetFilled = { id: number, name: string, cryptocurrency: TCryptocurrency, wallet: TWallet, miner: TMiner, pool: TPool, algorithm: TAlgorithm }
