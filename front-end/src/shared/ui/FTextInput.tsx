import { HTMLProps, SetStateAction, useEffect, useMemo, useRef } from "react"
import { useStateObj } from "@shared/lib"
import styles from './FTextInput.module.scss'
import _ from 'lodash'

const lineHeight = 30;

type FTextInputProps = Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange' | 'rows'> & {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  multiline?: boolean
  minRows?: number
  maxRows?: number
  title?: string
  password?: boolean,
  inputProps?: HTMLProps<HTMLInputElement>
}

export const FTextInput = (props: FTextInputProps) => {
  const multiline = props.multiline ?? false
  const refTextArea = useRef<HTMLTextAreaElement>(null)
  const refTitle = useRef<HTMLDivElement>(null)
  const refRTLine = useRef<HTMLDivElement>(null)
  const innerState = {
    value: useStateObj('')
  }
  const state = useMemo(() => {
    return {
      value: {
        value: props.value ?? innerState.value.value,
        setValue: (newValue: SetStateAction<string>) => innerState.value.setValue(prev => {
          const outValue = _.isFunction(newValue) ? newValue(prev) : newValue;
          if (props.onChange !== undefined) props.onChange(outValue)
          return outValue
        })
      }
    }
  }, [props.value, innerState.value.value, props.onChange])

  useEffect(() => {
    if (refTitle.current !== null && refRTLine.current !== null) {
      refRTLine.current.style.setProperty('--title-width', refTitle.current.clientWidth + 'px')
    }
  }, [refTitle, refRTLine])

  useEffect(() => {
    if (refTextArea.current !== null) {
      refTextArea.current!.style.height = ((props.minRows ?? 1) * lineHeight + 2) + 'px';
    }
  }, [refTextArea, props.minRows, props.multiline])

  useEffect(() => {
    const handler = () => {
      refTextArea.current!.style.height = ((props.minRows ?? 1) * lineHeight + 2) + 'px';
      refTextArea.current!.style.height = ((props.maxRows === undefined ? refTextArea.current!.scrollHeight : Math.min(refTextArea.current!.scrollHeight, props.maxRows * lineHeight + 2))) + 'px';
    }
    if (refTextArea.current !== null) {
      refTextArea.current.addEventListener('input', handler)
    }
    return () => {
      if (refTextArea.current !== null) {
        refTextArea.current.removeEventListener('input', handler)
      }
    }
  }, [refTextArea, props.minRows, props.maxRows, props.multiline])

  return (
    <div {..._.omit(props, 'value', 'onChange', 'placeholder', 'multiline', 'minRows', 'maxRows', 'autoResize', 'password', 'inputProps')} className={(props.className ?? '') + ' ' + styles['wrapper'] + ' ' + (state.value.value !== '' ? styles['active'] : '') + ' ' + (props.title === undefined || props.title === '' ? styles['no-title'] : '')}>
      <div ref={refTitle} className={styles['title']}>{props.title}</div>
      <div className={styles['lt-line']} />
      <div ref={refRTLine} className={styles['rt-line']} />
      {multiline && <textarea autoComplete={props.autoComplete} spellCheck={false} ref={refTextArea} className={styles['input']} placeholder={props.placeholder} value={state.value.value} onChange={e => state.value.setValue(e.target.value)} />}
      {!multiline && <input autoComplete={props.autoComplete} type={(props.password ?? false) ? 'password' : 'text'} placeholder={props.placeholder} value={state.value.value} onChange={e => state.value.setValue(e.target.value)} {...props.inputProps} style={{ marginTop: '-2px', ...props.inputProps?.style }} className={styles['input'] + ' ' + (props.inputProps?.className)} />}
    </div> 
  )
}