import { CSSProperties, HTMLProps, SetStateAction, useEffect, useMemo, useRef, useState } from "react"
import { useStateObj } from "@shared/lib"
import { useElementSize } from "usehooks-ts";
import styles from './FTextInput.module.scss'
import _ from 'lodash'

const lineHeight = 30;
const px = 10;
const py = 8;

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
  textareaProps?: HTMLProps<HTMLTextAreaElement>
}

const omitProps: Array<keyof FTextInputProps> = [
  'value',
  'onChange',
  'placeholder',
  'multiline',
  'minRows',
  'maxRows',
  'title',
  'password',
  'inputProps'
]

export const FTextInput = (props: FTextInputProps) => {
  const multiline = props.multiline ?? false
  const refTextArea = useRef<HTMLTextAreaElement>(null)
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
  const [refTitle, titleSize] = useElementSize()
  const [titleWidth, setTitleWidth] = useState(0)

  useEffect(() => {
    if (refTextArea.current !== null) {
      refTextArea.current!.style.height = ((props.minRows ?? 1) * lineHeight + 2 * py) + 'px';
    }
  }, [refTextArea, props.minRows, props.multiline])

  useEffect(() => {
    const handler = () => {
      refTextArea.current!.style.height = ((props.minRows ?? 1) * lineHeight + 2 * py) + 'px';
      refTextArea.current!.style.height = ((props.maxRows === undefined ? refTextArea.current!.scrollHeight : Math.min(refTextArea.current!.scrollHeight, props.maxRows * lineHeight + 2 * py))) + 'px';
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
    <div {..._.omit(props, omitProps)}
      onClick={() => setTitleWidth(titleSize.width)}
      className={(props.className ?? '') + ' ' + styles['wrapper'] + ' ' + (state.value.value !== '' ? styles['active'] : '') + ' ' + (props.title === undefined || props.title === '' ? styles['no-title'] : '')}
      style={{
        '--px': px + 'px',
        '--py': py + 'px',
        '--line-height': lineHeight + 'px',
        '--title-width': titleWidth + 'px'
      } as CSSProperties}
    >
      <div ref={refTitle} className={styles['title']}>{props.title}</div>
      <div className={styles['lt-line']} />
      <div ref={refRTLine} className={styles['rt-line']} />
      {multiline &&
        <textarea
          {...props.textareaProps}
          autoComplete={props.autoComplete}
          className={(props.textareaProps?.className ?? '') + ' ' + styles['textarea']}
          spellCheck={false}
          ref={refTextArea}
          placeholder={props.placeholder}
          value={state.value.value}
          onChange={e => state.value.setValue(e.target.value)}
        />
      }
      {!multiline &&
        <input
          {...props.inputProps}
          className={(props.inputProps?.className ?? '') + ' ' + styles['input']}
          autoComplete={props.autoComplete}
          type={(props.password ?? false) ? 'password' : 'text'}
          placeholder={props.placeholder}
          value={state.value.value}
          onChange={e => state.value.setValue(e.target.value)}
        />
      }
    </div> 
  )
}