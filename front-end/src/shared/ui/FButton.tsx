import { HTMLProps } from "react"
import styles from './FButton.module.scss'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import _ from 'lodash'

type FButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type'> & { severity: 'good' | 'bad', type?: "button" | "submit" | "reset", isLoading?: boolean }
const antIcon = <LoadingOutlined spin />;

export const FButton = (props: FButtonProps) => {
  return (
    <button {..._.omit(props, 'severity', 'isLoading')} type={props.type} className={(props.className ?? '') + ' ' + styles['wrapper'] + ' ' + (props.severity === 'good' ? styles['good'] : styles['bad'])}>
      <div className={styles['inner']}>
        {(props.isLoading ?? false) && <Spin indicator={antIcon} />}
        {!(props.isLoading ?? false) && props.children}
      </div>
    </button>
  )
}
