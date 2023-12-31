import { RootState } from 'app/store' 
import { useSelector } from 'react-redux'
import './boxComponent.scss' 
import BoxComponent from './BoxComponent' 

export default function TotalNvidia() {
    const totalNvidia = useSelector((state: RootState) => state.staticData.data?.calculations.gpusNvidia)
  return (
    <BoxComponent name='Nvidia' count={totalNvidia} color='#43C09B'/>
  )
}