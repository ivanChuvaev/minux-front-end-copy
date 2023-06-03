import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import sumOfValues from 'shared/components/sumOfValues'; 
import BoxWithBorder from 'shared/components/BoxWithBorder'

const name: string = 'Total Ram Usage' 

export default function TotalRam() {
  const ramsDynamic = useSelector((state: RootState) => state.ramDymamic.data); 
  
  const count: number = sumOfValues(ramsDynamic, 'usedB')  

  return (
    <BoxWithBorder name={name} count={count + ' Gb'}/> 
  )
}