import { StaticData } from "shared/store";

export const testStaticData: StaticData = {
    gpu: [
        {
            "uuid": "jfsdkjf230423",
            "information": {
                "manufacturer": "Nvidia",
                "periphery": "RTX 3080 Ti",
                "driverVersion": "515.76",
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
            }
        },
        "clocksMhz": {
            "max": 3900.0,
            "min": 800.0
        }
    },
    motherboard: {
        "information": {
            "manufacturer": "ASUSTeK COMPUTER INC.",
            "productName": "B250 MINING EXPERT",
            "serialNumber": "180118537208105"
        },
        "sataSlots": 4,
        "pciSlots": 19,
        "ramSlots": 4
    },
    hd: [
        {
            "uuid": "sdkfjk34",
            "information": {
                "description": "string",
                "product": "string",
                "vendor": "string",
                "busInfo": "string",
                "logicalName": "string",
                "serial": "string",
                "width": 21,
                "clockMhz": 44,
            },
            "capacityB": 256
        }, 
    ],
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
    calculations: {
        gpusCount: 2,
        gpusNvidia: 2,
        gpusRadeon: 0
    }
}