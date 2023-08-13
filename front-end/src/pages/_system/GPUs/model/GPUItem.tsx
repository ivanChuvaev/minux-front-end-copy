import { HTMLProps } from "react"
import { TGPUItem } from "../types"
import { FContainer } from "@shared/ui"
import { useMediaQuery } from 'usehooks-ts'
import styles from './GPUItem.module.scss'
import gpuOneVentImage from '@shared/images/gpu-one-vent-image.png'
import gpuTwoVentImage from '@shared/images/gpu-two-vent-image.png'
import _ from 'lodash'

type GPUItemProps = HTMLProps<HTMLDivElement> & {
  item: TGPUItem,
  narrow?: boolean,
  imageType?: 'one-vent' | 'two-vent'
}

export const GPUItem = (props: GPUItemProps) => {
  const above1500px = useMediaQuery('(min-width: 1500px)');

  const fields: Array<{ label: string, value: string }> = [
    { label: 'uuid', value: props.item.uuid },
    { label: 'Manufacturer', value: props.item.manufacturer },
    { label: 'Periphery', value: props.item.periphery },
    { label: 'Driver Ver.', value: props.item.driverVer },
    { label: 'CUDA Ver.', value: props.item.cudaVer},
    { label: 'Architecture', value: props.item.architecture },
    { label: 'Serial Number', value: props.item.serialNumber },
    { label: 'PCI bus', value: props.item.pciBus },
    { label: 'Memory', value: props.item.memory },
    { label: 'Power', value: props.item.power },
    { label: 'Core Clocks Mhz', value: props.item.coreClocksMhz },
    { label: 'Memory Clocks Mhz', value: props.item.memoryClockMhz }
  ]
  const lastField = { label: 'GPU uuid', value: 'GPU-87111c58-594e-494c-a574-6c9b130a6170' }

  return (
    <div {..._.omit(props, 'item', 'narrow', 'imageType')} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FContainer visibility={{ r: !above1500px, rc: false, tc: false, bc: false, lc: false }} className={styles['fields-grid-wrapper']} bodyProps={{ className: styles['fields-grid']}}>
        {_.map(_.chunk(fields, 5), (chunk, index) => (
          <div key={'chunk-' + index} className={styles['fields-chunk']}>
            {_.map(chunk, item => (
              <div key={item.label} className={styles['field']}>
                <span className={styles['label']}>{item.label}</span>
                <span className={styles['value']}>{item.value}</span>
              </div>
            ))}
          </div>
        ))}
        <div className={styles['last-field']}>
          <span className={styles['label']}>{lastField.label}</span>
          <span className={styles['value']}>{' '}{lastField.value}</span>
        </div>
      </FContainer>
      {above1500px &&
        <FContainer visibility={{ _l: false, tc: false, bc: false, rc: false }} className={styles['image-container-wrapper'] + ' ' + styles['sp1']} bodyProps={{ className: styles['image-container'] }}>
          <img src={{'one-vent': gpuOneVentImage, 'two-vent': gpuTwoVentImage}[props.imageType ?? 'two-vent']} alt='gpu' className={styles['image']} />
        </FContainer>
      }
    </div>
  )
}