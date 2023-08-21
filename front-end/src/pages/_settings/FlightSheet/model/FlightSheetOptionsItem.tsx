import { HTMLProps, MouseEventHandler, useId, useState } from "react";
import styles from './FlightSheetOptionsItem.module.scss';
import { Link } from "react-router-dom";
import arrowDown from '@shared/images/arrow-down.png'

type FlightSheetOptionsItemProps = HTMLProps<HTMLDivElement> & {
    item: {
        label: string, 
        value: string,
        options: string[] | undefined, 
        header: string, 
        setState: React.Dispatch<React.SetStateAction<string>>
    } 
}


export const FlightSheetOptionsItem = (props: FlightSheetOptionsItemProps) => { 
    const [isHidden, setIsHidden] = useState<boolean>(true); 

    const id = useId();

    const openDropDown = () => {
        setIsHidden(!isHidden)
    }

    const itemSelect: MouseEventHandler<HTMLDivElement> = (event) => { 
        props.item.setState(event.currentTarget.textContent ?? "") 
    } 

    const MouseLeaveHandler: MouseEventHandler<HTMLDivElement> = () => {
        setIsHidden(true);
    } 

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
        <div className={styles['header']}>
            {props.item.label}
            <Link to='/crypto-pool'>Add</Link>
        </div>
        <div className={styles['drop-down']} onMouseLeave={MouseLeaveHandler}>
            <div className={styles['drop-down-header']}>
                <input className={styles['input']} value={props.item.value} placeholder={props.item.header} disabled/>
                <img className={styles['img-arrow']}src={arrowDown} alt="arrowDown" onClick={openDropDown}/>
            </div> 
            <div className={styles['drop-down-options']} hidden={isHidden}>
                {props.item.options?.map((item, index) => (
                    <div key={id + index} onClick={itemSelect} className={styles['text']}>{item}</div>
                ))}
            </div>
        </div>
    </div>
  )
}