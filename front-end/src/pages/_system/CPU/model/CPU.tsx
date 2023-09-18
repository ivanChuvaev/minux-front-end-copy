import { HTMLProps, useMemo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@app/store" 
import { valueOrNA } from "@shared/utils"
import { useQuery } from "react-query"
import { getStaticCPU } from "@shared/api"
import { StaticCPU } from "@entities/StaticCPU/model/StaticCPU"
import { Spin } from "antd"
import { CPUImage } from "@shared/images/CPUImage"
import styles from './CPU.module.scss' 

type CPUProps = HTMLProps<HTMLDivElement>

export const CPU = (props: CPUProps) => {
  // const data = useSelector((state: RootState) => state.staticData.data?.cpu)
  const staticCPUQuery = useQuery(['load static CPU'], () => getStaticCPU({}))
  const cpuType: 'intel' | 'amd' | 'unknown' = useMemo(() => {
    if (staticCPUQuery.data === undefined || staticCPUQuery.data.information.manufacturer === null) return 'unknown'
    if (staticCPUQuery.data.information.manufacturer.search(/intel/i) !== -1) return 'intel'
    if (staticCPUQuery.data.information.manufacturer.search(/amd/i) !== -1) return 'amd'
    return 'unknown' 
  }, [staticCPUQuery.data])

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      {staticCPUQuery.isFetching && <Spin />}
      {staticCPUQuery.data !== undefined && !staticCPUQuery.isFetching &&
        <>
          <StaticCPU item={staticCPUQuery.data} />
          <div className={styles['cpu-image-wrapper']}>
            <CPUImage className={styles['image'] + ' ' + (cpuType === 'intel' ? styles['cpu-intel'] : cpuType === 'amd' ? styles['cpu-amd'] : styles['cpu-unknown'])} />
            <div className={styles['cpu-image-text']}>
              {valueOrNA(staticCPUQuery.data?.information.manufacturer)}
              <br />{
              staticCPUQuery.data?.information.modelName}
            </div>
          </div>
        </>
      }
    </div>
  )
}
