/* eslint-disable @typescript-eslint/no-redeclare */
import * as rt from 'runtypes' 

export const Cryptocurrencie = rt.Record({
    shortName: rt.String,
    fullName: rt.String,
    algorithms: rt.String
})
export type Cryptocurrencie = rt.Static<typeof Cryptocurrencie>

export const Wallet = rt.Record({
    coinName: rt.String,
    source: rt.String,
    address: rt.String
}) 
export type Wallet = rt.Static<typeof Wallet> 

export const Pool = rt.Record({
    poolsDomen: rt.String,
    poolsPort: rt.String, 
    coinName: rt.String
}) 
export type Pool = rt.Static<typeof Pool> 

export const Miner = rt.Record({
    shortName: rt.String,
    fullName: rt.String,
    algorithms: rt.Array(rt.String)
}) 
export type Miner = rt.Static<typeof Miner> 

export const Support = rt.Record({ 
    cryptocurrencies: rt.Array(Cryptocurrencie),
    wallets: rt.Array(Wallet),
    pools: rt.Array(Pool),
    miners: rt.Array(Miner)
}) 
export type Support = rt.Static<typeof Support>