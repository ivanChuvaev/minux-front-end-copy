import { HTMLProps } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from './UserLayout.module.scss'
import { FTrisContainer } from "@shared/ui";

export const UserLayout = (props: HTMLProps<HTMLDivElement>) => {
  const credentials = { username: 'ivan_chuvaev'}

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <div className={styles['left-panel']}>
        <div className={styles['name']}>{credentials.username.toUpperCase()}</div>
        <NavLink to="/user/profile" className={styles['page-link']}><div>Profile</div></NavLink>
        <NavLink to="/user/wallets" className={styles['page-link']}><div>Wallets</div></NavLink>
        <NavLink to="/user/crypto-pool" className={styles['page-link']}><div>Crypto/Pool</div></NavLink>
        <NavLink to="/user/vpn-proxy" className={styles['page-link']}><div>VPN/Proxy</div></NavLink>
        <NavLink to="/user/feedback" className={styles['page-link']}><div>Feedback</div></NavLink>
      </div>
      <FTrisContainer className={styles['body']}>
        <Outlet />
      </FTrisContainer>
    </div>
  )
}