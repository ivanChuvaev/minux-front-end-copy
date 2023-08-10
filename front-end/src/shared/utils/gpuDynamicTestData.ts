import { GpuDynamic } from "shared/store";

export const gpuDynamicTestData: GpuDynamic[] = [
    { 
        uuid: "fsdkfj324",
            temperatureCelcius: 45,
            fullName: "Nvidia RTX 3060TI",
            fanSpeedPercentage: 60, 
            hashrateMg: 1200,
            powerUsage: 170,
            algorithm: "Random X",
            cryptocurrency: "XMR",
            miner: "lolminer",
            minerUpTime: "2:00:00",
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
        uuid: "fsdk23324",
        temperatureCelcius: 45,
        fullName: "Nvidia RTX 3060TI",
        fanSpeedPercentage: 60, 
        hashrateMg: 1200,
        powerUsage: 170,
        algorithm: "Random X",
        cryptocurrency: "XMR",
        miner: "lolminer",
        minerUpTime: "2:00:00",
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
    }
]