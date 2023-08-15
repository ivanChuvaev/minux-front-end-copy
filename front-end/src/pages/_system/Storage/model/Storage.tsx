import { FContainer, FTopic } from "@shared/ui"
import { HTMLProps } from "react"
import styles from './Storage.module.scss'
import hddImage from '@shared/images/hdd-image.svg' 
import { useSelector } from "react-redux" 
import { RootState } from "@app/store" 
import { valueOrNA } from "@shared/utils"


type StorageProps = HTMLProps<HTMLDivElement>

export const Storage = (props: StorageProps) => {
  const data = useSelector((state: RootState) => state.staticData.data?.hd)

  const fields: Array<{ label: string, value: string | number }> = [
    { label: 'uuid', value: valueOrNA(data?.uuid) },
    { label: 'Device Model', value: valueOrNA(data?.information.product) },
    { label: 'Serial Number', value: valueOrNA(data?.information.serial) },
    { label: 'Capacity', value: valueOrNA(data?.capacityB) },
    { label: 'SATA ports', value: valueOrNA(data?.information.sataPorts) },
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
