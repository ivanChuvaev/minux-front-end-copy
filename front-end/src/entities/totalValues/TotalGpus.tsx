import { RootState } from 'app/store' 
import { useSelector } from 'react-redux'
import './boxComponent.scss' 
import BoxComponent from './BoxComponent' 

export default function TotalGpus() { 
    const totalGpus = useSelector((state: RootState) => state.dynamicData.data?.calculations.gpusCount)
  return (
    <BoxComponent name='GPUs' count={totalGpus} color='#D9D9D9'/>
  )
}