import { FDatePicker, FQuadContainer, FTextInput } from "@shared/ui";
import { HTMLProps } from "react";
import styles from './Feedback.module.scss'

export const Feedback = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FQuadContainer filled className={styles['main-box-wrapper']} bodyProps={{ className: styles['main-box'] }}>
        <span>Send us Your problems or thoughts. We'll listen to you!</span>
        <FTextInput multiline minRows={3} maxRows={3} title="Title" />
        <FTextInput multiline minRows={8} maxRows={13} title="Message"/>
        <FDatePicker />
      </FQuadContainer>
    </div>
  )
}
