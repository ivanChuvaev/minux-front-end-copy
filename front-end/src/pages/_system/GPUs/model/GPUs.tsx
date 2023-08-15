import { FTopic } from "@shared/ui"
import { HTMLProps } from "react" 
import { GPUItem } from "./GPUItem"
import styles from './GPUs.module.scss' 
import { useSelector } from "react-redux"
import { RootState } from "@app/store"

type GPUsProps = HTMLProps<HTMLDivElement> & {
}

export const GPUs = (props: GPUsProps) => {
  const data = useSelector((state: RootState) => state.staticData.data?.gpu);

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FTopic text="GPUs" className={styles['topic']} />
      <div className={styles['gpu-list']}>
        {data && data.map(gpu => (
          <GPUItem key={gpu.uuid} item={gpu} />
        ))}
      </div>
    </div>
  )
}
