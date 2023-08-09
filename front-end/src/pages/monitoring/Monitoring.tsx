 import './monitoring.scss'
import WorkerWidget from 'widgets/workers'
import SharesWidget from 'widgets/shares'
import PowerRamWidget from 'widgets/power&ram'
import { Cpu } from 'widgets/cpu'
import { Coins } from 'widgets/coins'
import { Gpu } from 'widgets/gpu'
import { FooterSystemInfo } from 'widgets/footerSystemInfo'
import { useDispatch } from 'react-redux'
import { dynamicDataAction } from 'shared/store/storeData'
import { testDynamicData } from 'shared/hook'

export default function Monitoring() { 
  const dispatch = useDispatch();
  dispatch(dynamicDataAction.updateDynamicData(testDynamicData))
    return (
      <div className='monitoring'>
        <div className='flex-conteiner-monitoring'> 
          <WorkerWidget/> 
           
          <PowerRamWidget/> 
           
          <SharesWidget/> 
        </div>

        <div className='flex-conteiner-monitoring'>
          <Cpu/>

          <Coins/>
        </div>

        <div className='flex-conteiner-monitoring'>
          <Gpu/>
        </div>

        <div className='flex-conteiner-monitoring-footer'>
          <FooterSystemInfo/>
        </div>
      </div>
      
  ) 
}