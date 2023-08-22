import { HTMLProps } from 'react'
import styles from './FQuadCornerContainer.module.scss'

export const FQuadCornerContainer = (props: HTMLProps<HTMLDivElement>) => {
    return (
        <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
            <div className={styles['lt-corner']}></div>
            <div className={styles['rt-corner']}></div>
            <div className={styles['lb-corner']}></div>
            <div className={styles['rb-corner']}></div>
            <div className={styles['lt-corner-line']}></div>
            <div className={styles['rt-corner-line']}></div>
            <div className={styles['lb-corner-line']}></div>
            <div className={styles['rb-corner-line']}></div> 
            {props.children} 
        </div>
    )
}