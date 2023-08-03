import { useDispatch, useSelector } from 'react-redux'
import './gpuitems.scss'
import { RootState } from 'app/store'
import GpuItem from './GpuItem'
import NaImage from 'shared/components/NaImage'
import { gpuDynamicAction } from './dynamic/gpuDynamicSlice'
import { gpuDynamicTestData } from 'shared/utils/gpuDynamicTestData'


export default function GpuItems() {
    const dispatch = useDispatch();
    dispatch(gpuDynamicAction.addGpuDynamic(gpuDynamicTestData))
    const gpuDynamicData = useSelector((state: RootState) => state.gpuDynamic.data) 
    if (gpuDynamicData.length === 0) {
        return (
            <div className='flex justify-center align-middle '>
                <NaImage width='300px' alt={true}/> 
            </div>
        )
    } 
  return (
    <div className='gpu-card-items'>
        {gpuDynamicData.map((item, index) => (
            <GpuItem key={item.uuid} item={item} index={index}/>
        ))}
    </div>
  )
}