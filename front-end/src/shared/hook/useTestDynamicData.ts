import { DynamicData } from 'shared/store';

export const testDynamicData: DynamicData = {
    state: {
        mining: true
    },
    cpu: {
        temperatureCelcius: 80,
        clockSpeed: 1000,
        fanSpeedPercentage: 100,
        hashrateMg: 1.4,
        powerUsage: 1.5,
        algorithm: 'Random X',
        cryptocurrency: 'XMR',
        miner: 'lolminer', 
        minerUpTime: '2:33:22',
        shares: {
            accepted: 12,
            rejected: 15
        }
    },
    gpu: [{ 
            uuid: 'fsdkfj324',
                temperatureCelcius: 45,
                fullName: 'Nvidia RTX 3080TI',
                fanSpeedPercentage: 60, 
                hashrateMg: 1200,
                powerUsage: 170,
                algorithm: 'Random X',
                cryptocurrency: 'XMR',
                miner: 'lolminer',
                minerUpTime: '2:30:00',
                shares: {
                    accepted: 100,
                    rejected: 6
                },
                memoryMb: {
                    reserved: 235,
                    used: 7,
                    free: 12045               
                },
                clocksMhz: {
                    graphics: 210,
                    sm: 210,
                    memory: 405,
                    video: 555,
                },
                voltageMv: {
                    graphics: 681.250 
                }
        }, 
        {
            uuid: 'fsdk23324',
            temperatureCelcius: 45,
            fullName: 'Nvidia RTX 3060TI',
            fanSpeedPercentage: 60, 
            hashrateMg: 1000,
            powerUsage: 170,
            algorithm: 'Random X',
            cryptocurrency: 'XMR',
            miner: 'lolminer',
            minerUpTime: '1:20:00',
            shares: {
                accepted: 100,
                rejected: 6
            },
            memoryMb: {
                reserved: 235,
                used: 7,
                free: 12045               
            },
            clocksMhz: {
                graphics: 210,
                sm: 210,
                memory: 405,
                video: 555,
            },
            voltageMv: {
                graphics: 681.250 
            } 
    }],
    ram: [ 
            {
                uuid: 'fsdkj',
                totalB: 256, 
                freeB: 256, 
            }, 

        ],
    hd: { 
        uuid: 'rwerkj432',
        temperatureCelcius: 25,
        capacityB: 256, 
        freeB: 256 
    }, 
    calculations: {
        coinsValue: [
            { coin: "Raven", algorithm: "Kawpow", value: 120 },
            { coin: "Bitcoin", algorithm: "Kawpow", value: 150 }
    ],
        gpusAccepted: 125,
        gpusRejected: 200, 
        gpusMiners: 2,
        gpusAlgorithms: 2,
        totalPower: 123,
        totalRam: 8000
    }
}