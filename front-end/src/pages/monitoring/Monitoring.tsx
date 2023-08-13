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
import { staticDataAction } from 'shared/store/storeData'
import { testDynamicData } from 'shared/hook'
import { testStaticData } from 'shared/hook/useTestStatic'

export default function Monitoring() { 

  const dispatch = useDispatch();

  //Test Data
  dispatch(dynamicDataAction.updateDynamicData(testDynamicData))
  dispatch(staticDataAction.updateStaticData(testStaticData))
  //Test Data

    return (
      <div className='monitoring'>
        <div className='monitoring-main-content'>
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
        </div>

        <div className='flex-conteiner-monitoring-footer'>
          <FooterSystemInfo/>
        </div>
      </div>
      
  ) 
}