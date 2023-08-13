import { FQuadContainer } from "@shared/ui"
import { HTMLProps } from "react"
import profile from '@shared/images/profile.png'
import styles from './ProfileButton.module.scss'
import { NavLink, useLocation } from "react-router-dom"

const links = [
  { url: '/profile', title: 'Profile' },
  { url: '/wallets', title: 'Wallets' },
  { url: '/crypto-pool', title: 'Crypto/Pool' },
  { url: '/vpn-proxy', title: 'VPN/Proxy' },
  { url: '/feedback', title: 'Feedback' },
  { url: '/logout', title: 'Logout' },
]

type ProfileButtonProps = HTMLProps<HTMLDivElement>

export const ProfileButton = (props: ProfileButtonProps) => {
  const location = useLocation()
  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper'] + ' ' + (links.some(v => v.url === location.pathname) ? styles['active'] : '')}>
      <FQuadContainer visibility={{ lt: false, rb: false }} className={styles['profile-image-wrapper']}>
        <img src={profile} alt="profile" className={styles['profile-image']} />
      </FQuadContainer>
      <div className={styles['profile-button-burger']}>
        <div className={styles['line']} />
        <div className={styles['line']} />
        <div className={styles['line']} />
      </div>
      <div className={styles['dropdown-wrapper']}>
        <div className={styles['dropdown-top-right-line']} />
        <div className={styles['dropdown']}>
          {links.map(link => (
              <NavLink key={link.url} to={link.url} className={styles['dropdown-item']}><span className={styles['text']}>{link.title}</span></NavLink> 
          ))}
        </div>
      </div>
    </div>
  )
}
