import { HTMLProps } from "react";
import styles from './FContainer.module.scss'
import _ from 'lodash'

type FContainerProps = HTMLProps<HTMLDivElement> & {
  /** will set default visibility of decorators, decorators are every part of container's border except of thin line */
  defaultHideDecorators?: boolean
  bodyProps?: HTMLProps<HTMLDivElement>
  /** defines what parts of container should be displayed */
  visibility?: {
    /** left top corner */
    lt?: boolean,
    /** top center line  */
    tc?: boolean,
    /** right top corner */
    rt?: boolean,
    /** left center line */
    lc?: boolean,
    /** right center line */
    rc?: boolean,
    /** left bottom corner */
    lb?: boolean,
    /** bottom center line */
    bc?: boolean,
    /** right bottom corner */
    rb?: boolean,
    /** left side without thin line */
    l?: boolean,
    /** top side without thin line */
    t?: boolean,
    /** right side without thin line */
    r?: boolean,
    /** bottom side without thin line */
    b?: boolean,
    /** left side including thin line */
    _l?: boolean,
    /** top side including thin line */
    _t?: boolean,
    /** right side including thin line */
    _r?: boolean,
    /** bottom side including thin line */
    _b?: boolean
  }
}

/** container with thick lines design */
export const FContainer = (props: FContainerProps) => {
  const defValue = !(props.defaultHideDecorators ?? false)
  const vis = {
    lt: props.visibility?.lt ?? ((props.visibility?.l ?? defValue) && (props.visibility?.t ?? defValue)),
    tc: props.visibility?.tc ?? (props.visibility?.t ?? defValue),
    rt: props.visibility?.rt ?? ((props.visibility?.r ?? defValue) && (props.visibility?.t ?? defValue)),
    lc: props.visibility?.lc ?? (props.visibility?.l ?? defValue),
    rc: props.visibility?.rc ?? (props.visibility?.r ?? defValue),
    lb: props.visibility?.lb ?? ((props.visibility?.l ?? defValue) && (props.visibility?.b ?? defValue)),
    bc: props.visibility?.bc ?? (props.visibility?.b ?? defValue),
    rb: props.visibility?.rb ?? ((props.visibility?.r ?? defValue) && (props.visibility?.b ?? defValue)),
    _l: props.visibility?._l ?? true,
    _t: props.visibility?._t ?? true,
    _r: props.visibility?._r ?? true,
    _b: props.visibility?._b ?? true
  }
  return (
    <div {..._.omit(props, 'defaultHideDecorators', 'visibility', 'bodyProps')} className={
      (props.className ?? '') + ' ' +
      styles['wrapper'] + ' ' +
      (!vis.lc && !vis.rc ? styles['no-vertical-c-lines'] : '') + ' ' +
      (!vis.tc && !vis.bc ? styles['no-horizontal-c-lines'] : '') + ' ' +
      (((!vis.lt || !vis._l || !vis._t) && (!vis.rt || !vis._r || !vis._t) && (!vis.lb || !vis._l || !vis._b) && (!vis.rb || !vis._r || !vis._b)) ? styles['no-corners'] : '')}
    >
      <div {...props.bodyProps} className={styles['body'] + ' ' + (props.bodyProps?.className ?? '')}>
        {props.children}
      </div>
      {vis._l && vis._t && vis.lt && <div className={styles['lt-corner']} />}
      {vis._r && vis._t && vis.rt && <div className={styles['rt-corner']} />}
      {vis._l && vis._b && vis.lb && <div className={styles['lb-corner']} />}
      {vis._r && vis._b && vis.rb && <div className={styles['rb-corner']} />}
      {vis._t &&
        <>
          {vis.tc &&
            <>
              <div className={styles['lt-thin-line-part'] + ' ' + (!vis._l || !vis.lt ? styles['no-corner'] : '')} />
              <div className={styles['tc-line']} />
              <div className={styles['rt-thin-line-part'] + ' ' + (!vis._r || !vis.rt ? styles['no-corner'] : '')} />
            </> 
          }
          {!vis.tc && <div className={styles['t-thin-line-full'] + ' ' + (!vis._l || !vis.lt ? styles['no-l-corner'] : '') + ' ' + (!vis._r || !vis.rt ? styles['no-r-corner'] : '')} />}
        </> 
      }

      {vis._l &&
        <>
          {vis.lc &&
            <>
              <div className={styles['l-side-t-thin-line-part'] + ' ' + (!vis._t || !vis.lt ? styles['no-corner'] : '')} />
              <div className={styles['lc-line']} />
              <div className={styles['l-side-b-thin-line-part'] + ' ' + (!vis._b || !vis.lb ? styles['no-corner'] : '')} />
            </> 
          }
          {!vis.lc && <div className={styles['l-thin-line-full'] + ' ' + (!vis._t || !vis.lt ? styles['no-t-corner'] : '') + ' ' + (!vis._b || !vis.lb ? styles['no-b-corner'] : '')} />}
        </> 
      }

      {vis._r &&
        <>
          {vis.rc &&
            <>
              <div className={styles['r-side-t-thin-line-part'] + ' ' + (!vis._t || !vis.rt ? styles['no-corner'] : '')} />
              <div className={styles['rc-line']} />
              <div className={styles['r-side-b-thin-line-part'] + ' ' + (!vis._b || !vis.rb ? styles['no-corner'] : '')} />
            </> 
          }
          {!vis.rc && <div className={styles['r-thin-line-full'] + ' ' + (!vis._t || !vis.rt ? styles['no-t-corner'] : '') + ' ' + (!vis._b || !vis.rb ? styles['no-b-corner'] : '')} />}
        </> 
      }

      {vis._b &&
        <>
          {vis.bc &&
            <>
              <div className={styles['lb-thin-line-part'] + ' ' + (!vis._l || !vis.lb ? styles['no-corner'] : '')} />
              <div className={styles['bc-line']} />
              <div className={styles['rb-thin-line-part'] + ' ' + (!vis._r || !vis.rb ? styles['no-corner'] : '')} />
            </> 
          }
          {!vis.bc && <div className={styles['b-thin-line-full'] + ' ' + (!vis._l || !vis.lb ? styles['no-l-corner'] : '') + ' ' + (!vis._r || !vis.rb ? styles['no-r-corner'] : '')} />}
        </> 
      }
    </div>
  )
}