import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import sumOfValues from 'shared/components/sumOfValues'; 
import BoxWithBorder from 'shared/components/BoxWithBorder'

const name: string = 'Total Power Usage' 

export default function TotalPower() {
  const gpusDynamic = useSelector((state: RootState) => state.gpuDynamic.data); 
  
  const count: number = sumOfValues(gpusDynamic, 'powerUsage')  

  return (
    <BoxWithBorder name={name} count={count + " Watt"}/> 
  )
}