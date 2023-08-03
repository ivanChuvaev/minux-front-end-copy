import TotalGpus from 'entities/totalValues/TotalGpus'
import TotalNvidia from 'entities/totalValues/TotalNvidia'
import TotalRadeon from 'entities/totalValues/TotalRadeon'
import './gpu.scss'
import { GpuItems } from 'entities/gpu' 

export default function Gpu() {
  return (
    <div className='gpus-conteiner'> 
      <div className='grid-gpus-conteiner'> 
          <TotalGpus/>

          <TotalNvidia/>

          <TotalRadeon/> 

          <span>Accepted</span>

          <span>Rejected</span>

          <span>Hashrate</span>

          <span>Temp</span>

          <span>Fan</span>

          <span>Power</span>
      </div> 

      <div className='border-line'>
        <div className='gpus-scroll-conteiner'>
          <GpuItems/>
        </div>
      </div>
    </div>

  )
}