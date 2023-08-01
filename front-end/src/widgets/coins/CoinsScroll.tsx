import { useId } from 'react' 
import { CoinsValue } from 'entities/support/types' 
import NaImage from 'shared/components/NaImage';

type Props = {
    coinsValue: Array<CoinsValue> | undefined;
}

export default function CoinsScroll({coinsValue}: Props) { 
    const id = useId(); 

    const coinsArray = coinsValue?.map((item) => (
        <div className='flex justify-between' key={id}>
            <p>{item.coin}</p>
            <p>{item.algorithm}</p>
            <p>{item.value}</p> 
        </div>
    )) 

    const naImage = (width: string) => (
        <div className='flex justify-center  w-50'>
            <NaImage width= {width}/>
        </div>
    )  

    return ( 
        <div className='border-line'>
            <div className='coin-scroll'>
                {coinsArray ? coinsArray : naImage("100px")}
            </div>
        </div>
    )
}