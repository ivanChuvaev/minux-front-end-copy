import { RootState } from 'app/store' 
import { useSelector } from 'react-redux'
import './boxComponent.scss' 
import BoxComponent from './BoxComponent' 

export default function TotalGpus() { 
    const totalGpus = useSelector((state: RootState) => state.support.data?.totalValues.gpusCount)
  return (
    <BoxComponent name='GPU count' count={totalGpus} color='#D9D9D9'/>
  )
}