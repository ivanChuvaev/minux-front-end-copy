import { FContainer, FTopic } from "@shared/ui"
import { HTMLProps } from "react"
import styles from './Storage.module.scss'
import hddImage from '@shared/images/hdd-image.svg'

const dummy = {
  deviceModel: 'EX280421RUS',
  serialNumber: 'EX5572810221146',
  capacity: '180118537208105',
  uuid: '65564654654781234976',
  sataPorts: 'SATA 3.2 6 Gb/s'
}


type StorageProps = HTMLProps<HTMLDivElement>

export const Storage = (props: StorageProps) => {
  const data = dummy // TODO replace with actual data

  const fields: Array<{ label: string, value: string | number }> = [
    { label: 'Device Model', value: data.deviceModel },
    { label: 'Serial Number', value: data.serialNumber },
    { label: 'Capacity', value: data.capacity },
    { label: 'uuid', value: data.uuid },
    { label: 'SATA ports', value: data.sataPorts },
  ]

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FContainer visibility={{ lc: false, rc: false }} className={styles['data']} bodyProps={{ className: styles['data-body']}}>
        <FTopic className={styles['data-topic']} text="HDD" />
        <div className={styles['fields']}>
          {fields.map(field => (
            <div key={field.label} className={styles['field-item']}>
              <label>{field.label}</label>
              <div>{field.value}</div>
            </div>
          ))}
        </div>
      </FContainer>
      <img src={hddImage} alt="motherboard" className={styles['image']} />
    </div>
  )
}
