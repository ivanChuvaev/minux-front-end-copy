import { useSelector } from 'react-redux'
import './gpuitems.scss'
import { RootState } from 'app/store'
import GpuItem from './GpuItem'
import NaImage from 'shared/components/NaImage' 

export default function GpuItems() { 
    const gpuDynamicData = useSelector((state: RootState) => state.dynamicData.data?.gpu) 
    if (gpuDynamicData) {
        return (
            <>
                {gpuDynamicData.map((item, index) => (
                    <GpuItem key={item.uuid} item={item} index={index}/>
                ))}
            </>
        )
    } 
  return ( 
    <div className='flex justify-center mt-10'>
       <NaImage width='300px' alt={true}/> 
    </div>
  )
}