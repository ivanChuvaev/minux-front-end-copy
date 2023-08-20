import { FContainer, FTopic } from "@shared/ui"
import { HTMLProps } from "react"
import motherboardImage from '@shared/images/motherboard-image.svg'
import styles from './Motherboard.module.scss' 
import { useSelector } from "react-redux"
import { RootState } from "@app/store"
import { valueOrNA } from "@shared/utils"

type MotherboardProps = HTMLProps<HTMLDivElement>

export const Motherboard = (props: MotherboardProps) => { 
  const data = useSelector((state: RootState) => state.staticData.data?.motherboard)

  const fields: Array<{ label: string, value: string | number }> = [
    { label: 'Manufacturer', value: valueOrNA(data?.information.manufacturer) },
    { label: 'Product Name', value: valueOrNA(data?.information.productName) },
    { label: 'Serial Number', value: valueOrNA(data?.information.serialNumber) },
    { label: 'uuid', value: valueOrNA(data?.uuid) },
    { label: 'SATA ports', value: valueOrNA(data?.sataSlots) },
    { label: 'RAM Type', value: valueOrNA(data?.ramSlots.type) },
    { label: 'Maximum RAM Speed', value: valueOrNA(data?.ramSlots.maxSpeed + " Mhz") },
    { label: 'Maximum RAM Capacity', value: valueOrNA(data?.ramSlots.maxCapacity) + " Gb" },
    { label: 'PCIe', value: valueOrNA(data?.pciSlots) },
  ]

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FContainer visibility={{ lc: false, rc: false }} className={styles['data']} bodyProps={{ className: styles['data-body']}}>
        <FTopic className={styles['data-topic']} text="MOTHERBOARD" />
        <div className={styles['fields']}>
          {fields.map(field => (
            <div key={field.label} className={styles['field-item']}>
              <label>{field.label}</label>
              <div>{field.value}</div>
            </div>
          ))}
        </div>
      </FContainer>
      <img src={motherboardImage} alt="motherboard" className={styles['image']} />
    </div>
  )
}
