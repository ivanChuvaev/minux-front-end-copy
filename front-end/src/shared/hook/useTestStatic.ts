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
                "gpuUuid": "GPU-87111c58-594e-494c-a574-6c9b130a6170",
                "productArchitecture": "Ampere",
                "serialNumber": null,
                "vbiosVersion": "94.06.25.00.7e",
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
        "sataPorts": "4 x 6",
        "pciSlots": "18 x PCIe, 1 x PCIe x16" ,
        "ramSlots": {
            capacity: 5000,
            speed: 1234,
            type: "4 x DDR4"
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
    }
}