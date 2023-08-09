import { DynamicData } from 'shared/store';

export const testDynamicData: DynamicData = {
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
        },
        cores: [
            {
                temperature: 45,
                usrPercentage: 0.04,
                nicePercentage: 0.00,
                sysPercentage: 0.11,
                iowaitPercentage: 0.06,
                irgPercentage: 0.02,
                softPercentage: 0.02,
                stealPercentage: 0.00,
                guestPercentage: 0.00,
                gnicePercentage: 0.00,
                idlePercentage: 99.75
            }],
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
                availableB: 256,
                freeB: 256,
                usedB: 256
            }, 

        ],
    hd: [{ 
        uuid: 'rwerkj432',
        temperatureCelcius: 25,
        capacityB: 256,
        availableB: 256,
        freeB: 256 
    }]
}