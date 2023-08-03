import { RootState } from 'app/store';
import { useSelector } from 'react-redux'; 
import BoxWithBorder from 'shared/components/BoxWithBorder'

const name: string = 'Total Ram Usage' 

export default function TotalRam() {
  const totalRam = useSelector((state: RootState) => state.support.data?.totalValues.ram);  

  return (
    <BoxWithBorder name={name} count={totalRam} value='Gb' color2='value'/> 
  )
}