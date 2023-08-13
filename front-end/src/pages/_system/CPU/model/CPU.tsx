import { FContainer, FTopic } from "@shared/ui"
import { HTMLProps } from "react"
import cpuImage from '@shared/images/cpu-image.svg'
import styles from './CPU.module.scss'

const dummy = {
  manufacturer: 'AMD Ryzen',
  model: '7 5700x',
  architecture: 'x86_64',
  operation: '32-bit,64-bit',
  cpus: 8,
  threadsPerCore: 2,
  coresPerSocket: 8,
  maxClock: 4661.7,
  minClock: 2200.0,
  cacheL2: '4 Mb',
  cahceL3: '32 Mb'
}

type CPUProps = HTMLProps<HTMLDivElement>

export const CPU = (props: CPUProps) => {
  const data = dummy // TODO replace with actual data

  const fields: Array<{ label: string, value: string | number }> = [
    { label: 'Manufacturer', value: data.manufacturer },
    { label: 'Model', value: data.model },
    { label: 'Architecture', value: data.architecture },
    { label: 'Operation', value: data.operation },
    { label: 'CPUs', value: data.cpus },
    { label: 'Threads per Core', value: data.threadsPerCore },
    { label: 'Cores per Socket', value: data.coresPerSocket },
    { label: 'Max Clock', value: data.maxClock },
    { label: 'Min Clock', value: data.minClock },
    { label: 'Cache L2', value: data.cacheL2 },
    { label: 'Cache L3', value: data.cahceL3 }
  ]

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FContainer visibility={{ lc: false, rc: false }} className={styles['data']} bodyProps={{ className: styles['data-body']}}>
        <FTopic className={styles['data-topic']} text="CPU" />
        <div className={styles['fields']}>
          {fields.map(field => (
            <div key={field.label} className={styles['field-item']}>
              <label>{field.label}</label>
              <div>{field.value}</div>
            </div>
          ))}
        </div>
      </FContainer>
      <div className={styles['cpu-image-wrapper']}>
        <img src={cpuImage} alt="cpu" className={styles['image']} />
        <div className={styles['cpu-image-text']}>{data.manufacturer}<br />{data.model}</div>
      </div>
    </div>
  )
}
