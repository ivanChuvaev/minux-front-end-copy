import { RootState } from 'app/store';
import { useSelector } from 'react-redux'; 
import BoxWithBorder from 'shared/components/BoxWithBorder'

const name: string = 'Total Power Usage' 

export default function TotalPower() {
  const totalPower = useSelector((state: RootState) => state.dynamicData.data?.calculations.totalPower); 

  return (
    <BoxWithBorder name={name} count={totalPower} value='Watt' color2='value'/> 
  )
}