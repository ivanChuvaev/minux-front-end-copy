import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Logo } from './Logo'
import { FQuadContainer } from '@shared/ui'
import { Aside } from './Aside'
import bgLogo from '@shared/images/bg-logo.svg'
import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className='flex'>
        <FQuadContainer visibility={{ _l: false, _t: false }} className={styles['logo'] + ' ' + styles['sp1']}>
          <Logo />
        </FQuadContainer>
        <Header className="flex-grow" /> 
      </div>
      <div className={styles['body-with-sidebar']}>
        <Aside />
        <FQuadContainer visibility={{ _r: false, _b: false }} style={{ padding: 1, flexGrow: 1 }}>
          <div className={styles['body']}>
            <img src={bgLogo} alt="bg-logo" className={styles['bg-logo']} draggable={false} />
            <Outlet/>
          </div>
        </FQuadContainer>
      </div>
    </div>
  )
}