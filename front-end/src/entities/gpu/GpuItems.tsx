import { useDispatch, useSelector } from 'react-redux'
import './gpuitems.scss'
import { RootState } from 'app/store'
import GpuItem from './GpuItem'
import NaImage from 'shared/components/NaImage' 
import { gpuDynamicTestData } from 'shared/utils/gpuDynamicTestData'
import { dynamicDataAction } from 'shared/store/storeData'

export default function GpuItems() { 
    const dispatch = useDispatch(); 
    dispatch(dynamicDataAction.changeGpuDynamic(gpuDynamicTestData))
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
    <div className='flex justify-center align-middle'>
       <NaImage width='300px' alt={true}/> 
    </div>
  )
}