import { RootState } from 'app/store' 
import { useSelector } from 'react-redux'
import './boxComponent.scss' 
import BoxComponent from './BoxComponent' 

export default function TotalRadeon() {
    const totalRadeon = useSelector((state: RootState) => state.staticData.data?.calculations.gpusRadeon)
  return (
    <BoxComponent name='AMD' count={totalRadeon} color='#FC4E4E'/>
  )
}