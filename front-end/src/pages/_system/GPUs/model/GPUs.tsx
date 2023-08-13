import { FTopic } from "@shared/ui"
import { HTMLProps } from "react"
import { TGPUItem } from "../types"
import { GPUItem } from "./GPUItem"
import styles from './GPUs.module.scss'

const dummy: TGPUItem[] = [
  {
    uuid: 'jsdkjf230423',
    manufacturer: 'Nvidia',
    periphery: 'RTX 3080 Ti',
    driverVer: '515.76',
    cudaVer: '11.7',
    architecture: 'Ampere',
    serialNumber: 'null',
    pciBus: '0x0b',
    memory: '12288 Mb',
    power: '125-184 Watt',
    coreClocksMhz: 'jfsdkf230423',
    memoryClockMhz: 'Nvidia',
    gpuUuid: 'GPU-87111c58-594e-494c-a574-6c9b130a6170'
  },
  {
    uuid: 'jsdkjf230423',
    manufacturer: 'Nvidia',
    periphery: 'RTX 3080 Ti',
    driverVer: '515.76',
    cudaVer: '11.7',
    architecture: 'Ampere',
    serialNumber: 'null',
    pciBus: '0x0b',
    memory: '12288 Mb',
    power: '125-184 Watt',
    coreClocksMhz: 'jfsdkf230423',
    memoryClockMhz: 'Nvidia',
    gpuUuid: 'GPU-87111c58-594e-494c-414-6c926170'
  },
  {
    uuid: 'jsdkjf230423',
    manufacturer: 'Nvidia',
    periphery: 'RTX 3080 Ti',
    driverVer: '515.76',
    cudaVer: '11.7',
    architecture: 'Ampere',
    serialNumber: 'null',
    pciBus: '0x0b',
    memory: '12288 Mb',
    power: '125-184 Watt',
    coreClocksMhz: 'jfsdkf230423',
    memoryClockMhz: 'Nvidia',
    gpuUuid: 'GPU-87111c58-594e-494c-a574-6c9b3a6170'
  }
]

type GPUsProps = HTMLProps<HTMLDivElement> & {
}

export const GPUs = (props: GPUsProps) => {
  const data = dummy;

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FTopic text="GPUs" className={styles['topic']} />
      <div className={styles['gpu-list']}>
        {data.map(gpu => (
          <GPUItem key={gpu.gpuUuid} item={gpu} />
        ))}
      </div>
    </div>
  )
}
