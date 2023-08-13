import { HTMLProps } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from './HeaderItem.module.scss'
import _ from 'lodash'

type HeaderItemProps = HTMLProps<HTMLDivElement> & {
  item: {
    title: string
    links: Array<{
      url: string,
      title: string
    }>
  }
}

export const HeaderItem = (props: HeaderItemProps) => {
  const location = useLocation()
  return (
    <div {..._.omit(props, 'item')} className={styles['wrapper'] + ' ' + (props.item.links.some(v => v.url === location.pathname) ? styles['active'] : '') + ' ' + (props.className ?? '')}>
      {props.item.links.length === 1 &&
        <NavLink className={styles['group-label']} to={props.item.links[0].url}><span className={styles['text']}>{props.item.links[0].title}</span></NavLink>
      }
      {props.item.links.length > 1 &&
        <>
          <div className={styles['group-label']}><span className={styles['text']}>{props.item.title}</span></div>
          <div className={styles['dropdown']}>
            {props.item.links.map(link => (
              <NavLink key={link.url} className={styles['dropdown-item']} to={link.url}><span className={styles['text']}>{link.title}</span></NavLink>
            ))}
          </div>
        </>
      }
    </div>
  )
}
