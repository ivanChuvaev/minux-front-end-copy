import { FContainer, FTopic } from "@shared/ui"
import { HTMLProps } from "react"
import motherboardImage from '@shared/images/motherboard-image.svg'
import styles from './Motherboard.module.scss'

const dummy = {
  manufacturer: 'ASUSTeK COMPUTER INC.',
  productName: 'B250 MINING EXPERT',
  serialNumber: '180118537208105',
  uuid: '65564654654781234976',
  sataPorts: '4 x 6 Gb/s',
  ramType: '2 x DDR4',
  maximumRamSpeed: '2400 Mhz',
  maximumRamCapacity: '32 Gb',
  pcie: '18 x PCIe, 1 x PCIe x 16'
}

type MotherboardProps = HTMLProps<HTMLDivElement>

export const Motherboard = (props: MotherboardProps) => {
  const data = dummy // TODO replace with actual data

  const fields: Array<{ label: string, value: string | number }> = [
    { label: 'Manufacturer', value: data.manufacturer },
    { label: 'Product Name', value: data.productName },
    { label: 'Serial Number', value: data.serialNumber },
    { label: 'uuid', value: data.uuid },
    { label: 'SATA ports', value: data.sataPorts },
    { label: 'RAM Type', value: data.ramType },
    { label: 'Maximum RAM Speed', value: data.maximumRamSpeed },
    { label: 'Maximum RAM Capacity', value: data.maximumRamCapacity },
    { label: 'PCIe', value: data.pcie },
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
