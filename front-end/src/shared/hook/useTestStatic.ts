import { StaticData } from "shared/store";

export const testStaticData: StaticData = {
    gpu: [
        {
            "uuid": "jfsdkjf230423",
            "information": {
                "manufacturer": "Nvidia",
                "periphery": "RTX 3080 Ti",
                "driverVersion": "515.76",
                "architecture": "Ampere",
                "cudaVersion": "11.7", 
                "productArchitecture": "Ampere",
                "serialNumber": null, 
                "pci": {
                    "bus": "0x0b",
                    "deviceId": "0x250410de",
                    "busId": "00000000:0b:00.0"
                }
            },
            "temperatureCelsius": {
                "shutdown": 93, 
                "maxOperating": null 
            },
            "memoryMb": {
                "total": 12288,
            },
            "powerWatt": {
                "defaultLimit": 170, 
                "enforcedLimit": 170, 
                "minimal": 125,
                "maximum": 184
            },
            "clocksMhz": {
                "coreMin": 100,
                "coreMax": 2000,
                "memMin": 150,
                "memMax": 2500
            }
        }, 
    ],
    cpu: {
        "information": {
            "manufacturer": "Intel",
            "modelName": "i3-7100",
            "architecture": "x86_64",
            "opModes": "32-bit, 64-bit",
            "cores": {
                "cpus": 4,
                "threadsPerCore": 2,
                "threadsPerSocket": 2,
                "sockets": 1
            },
            cacheL2: 12,
            cacheL3: 23
        },
        "clocksMhz": {
            "max": 3900.0,
            "min": 800.0
        }
    },
    motherboard: {
        uuid: "2343241sdfwe",
        "information": {
            "manufacturer": "ASUSTeK COMPUTER INC.",
            "productName": "B250 MINING EXPERT",
            "serialNumber": "180118537208105"
        },
        "sataSlots": 4,
        "pciSlots": 12 ,
        "ramSlots": {
            type: 'DDR4',
            count: 4,
            maxSpeed: 1000,
            maxCapacity: 16000
        }
    },
    hd:
        {
            "uuid": "sdkfjk34",
            "information": {
                "description": "131",
                "product": "Kingston",
                "vendor": "Allah",
                "busInfo": "1234",
                "logicalName": "A@#$1",
                "serial": "123-412-124",
                "width": 21,
                "clockMhz": 44,
                sataPorts: 4
            },
            "capacityB": 256
        }, 
    ram: [
        {
            "uuid": "qweroiu54",
            "information": {
                "totalWidthB": 64,
                "dataWidthB": 64,
                "sizeGb": 4,
                "formFactor": "DIMM",
                "type": "DDR4",
                "memorySpeedMts": 2400,
                "manufacturer": "09DF",
                "serialNumber": "009C7049",
                "configuredMemorySpeedMts": 2400,
                "configuredVoltageV": 1.2
            }
        }, 
    ],
    systemInfo: {
        motherBoard: "Asus Rock 2500GMX",
        cpu: "Intel i5-6666",
        hd: "Sumsung A2300",
        system: "Linux Ubuntu v22",
        openCl: "nihuya ne ponyal",
        cuda: "eshe luchshe",
        driver: "v2024",
        minuxVer: "1.00",
        localIp: "111.01.01.111",
        globalIp: "111.01.01.111",
        macAdress: "100.01.01.100", 
    },
    calculations: {
        gpusCount: 2,
        gpusNvidia: 2,
        gpusRadeon: 0
    },
    support: {
        pools: [
            {poolsDomen: "2miner.com", poolsPort: "4500", coinName:"Bitcoin"},
            {poolsDomen: "5miner.com", poolsPort: "5500", coinName:"Ethereum"},
        ],
        wallets: [
            {coinName: 'Ethereum', source: 'https//al/sdf.com', address: '123.41.23.101'},
            {coinName: 'Bitcoin', source: 'https//BTC/coin.com', address: '512.623.613.412'}
        ],
        cryptocurrencies: [
            { shortName: "ETH", fullName: 'Ethereum', algorithms: "Ethash" },
            { shortName: "ETC", fullName: "Bitcoin", algorithms: "SHA-256" },
            { shortName: "ETC", fullName: "Ethereum Classic", algorithms: "Ethash" },
            { shortName: "ETC", fullName: "Ripple", algorithms: "Ripple" }
        ],
        miners: [
            { shortName: "trex", fullName: "T-Rex", algorithms: [ "Ethash", "Autolykos2"] },
            { shortName: "lolminer", fullName: "lolMiner", algorithms: [ "Ethash", "lolminer", 'Ripple'] }
        ]
    }
}