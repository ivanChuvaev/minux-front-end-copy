import React, { HTMLProps, useState } from 'react' 
import styles from './FlightSheetList.module.scss'
import arrowDown from 'shared/images/arrow-down.png'
import threeDots from 'shared/images/three-dots.svg'

export default function FlightSheetList(props: HTMLProps<HTMLDivElement>) {
    const data = [
        {id: 1, 
        name: 'My RVN strategy', 
        coinName: 'BTC', 
        wallet: 'BYBIT RVN', 
        pool: 'hiveon', 
        miner: 'nbminer',
        walletAdress : {
            name: 'Wallet Adress',
            value: 'AJHSd9jah4DKJ78ADBaj66uhhaudaliHLASJd4h'
        },
        serverAddress: { 
            name: 'Server Address',
            value: ['run.hiveon.com:8888', 'run.hiveon.com:9999']
        },
        algorithm: {
            name: 'Algorithm',
            value: 'kawpow'
        }
     }
    ]

    const [isHidden, setIsHidden] = useState(false)

    const handlerHidden = () => {
        setIsHidden(!isHidden)
    }
  return (
    <div {...props} className={(props.className ?? "") + styles['wrapper']}>
        {data.map(item => (
            <div key={item.id} className={styles['flex-container']}>
                <div className={styles['border-line']}>
                    <div className={styles['list-item']}>
                        <p>{item.name}</p>
                        <p><span className={styles['text-color']}>coin</span> {item.coinName}</p>
                        <p><span className={styles['text-color']}>wallet</span> {item.wallet}</p>
                        <p><span className={styles['text-color']}>pool</span> {item.pool}</p>
                        <p><span className={styles['text-color']}>miner</span> {item.miner}</p>
                        <img className={styles['img']} src={arrowDown} alt='arrowDown' onClick={handlerHidden}/>
                    </div> 
                    {isHidden && 
                        <div className={styles['grid-hidden']}>
                            <div className={styles['item-1']}>
                                <p>{item.walletAdress.name}</p>
                                <p className='opacity-[60%]'>{item.walletAdress.value}</p>
                            </div>
                            <div className={styles['item-2']}> 
                                <p>{item.serverAddress.name}</p>
                                {item.serverAddress.value.map((item) => (
                                    <p className='opacity-[60%]' key={item}>{item}</p>
                                ))}
                            </div>
                            <div className={styles['item-3']}> 
                                <p>{item.algorithm.name}</p>
                                <p className='opacity-[60%]'>{item.algorithm.value}</p>
                            </div> 
                        </div>
                    } 
                </div> 
                <img className={styles['img']} src={threeDots} alt='options'/> 
            </div>
        ))}
    </div>
  )
} 