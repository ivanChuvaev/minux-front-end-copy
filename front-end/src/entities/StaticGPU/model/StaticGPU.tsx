import { HTMLProps } from "react" 
import { FContainer } from "@shared/ui"
import { useMediaQuery } from 'usehooks-ts'
import { valueOrNA } from "@shared/utils"
import { TStaticGPU } from "@shared/types"
import gpuOneVentImage from '@shared/images/gpu-one-vent-image.png'
import gpuTwoVentImage from '@shared/images/gpu-two-vent-image.png'
import styles from './StaticGPU.module.scss'
import _ from 'lodash'

const omittedProps = [
  'item',
  'imageType'
] as const

type StaticGPUProps = Omit<HTMLProps<HTMLDivElement>, typeof omittedProps[number]> & {
  item: TStaticGPU,
  imageType?: 'one-vent' | 'two-vent'
}

export const StaticGPU = (props: StaticGPUProps) => {
  const above1500px = useMediaQuery('(min-width: 1600px)');
  const above1300px = useMediaQuery('(min-width: 1300px)');

  const fields: Array<{ label: string, value: string }> = [
    { label: 'uuid', value: props.item.uuid },
    { label: 'Manufacturer', value: valueOrNA(props.item.information.manufacturer) },
    { label: 'Periphery', value: valueOrNA(props.item.information.periphery) },
    { label: 'Driver Ver.', value: valueOrNA(props.item.information.driverVersion) },
    { label: 'CUDA Ver.', value: valueOrNA(props.item.information.cudaVersion)},
    { label: 'Architecture', value: valueOrNA(props.item.information.architecture) },
    { label: 'Serial Number', value: valueOrNA(props.item.information.serialNumber) },
    { label: 'PCI bus', value: valueOrNA(props.item.information.pci.bus) },
    { label: 'Memory', value: valueOrNA(props.item.memoryMb.total) + " Gb" },
    { label: 'Power', value: valueOrNA(props.item.powerWatt.minimal) + " Watt" },
    { label: 'Core Clocks Mhz', value: valueOrNA(props.item.clocksMhz.coreMax) },
    { label: 'Memory Clocks Mhz', value: valueOrNA(props.item.clocksMhz.memMax)  }
  ]
  const lastField = { label: 'GPU uuid', value: 'GPU-87111c58-594e-494c-a574-6c9b130a6170' }

  return (
    <div {..._.omit(props, omittedProps)} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FContainer
        bodyProps={{ className: styles['fields-grid']}}
        visibility={{ r: !above1500px, rc: false, tc: false, bc: false, lc: false }}
        className={styles['fields-grid-wrapper']}
      >
        {_.map(_.chunk(fields, above1300px ? 5 : 6), (chunk, index) => (
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
