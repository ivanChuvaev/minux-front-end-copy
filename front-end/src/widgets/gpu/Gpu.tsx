import TotalGpus from 'entities/totalValues/TotalGpus'
import TotalNvidia from 'entities/totalValues/TotalNvidia'
import TotalRadeon from 'entities/totalValues/TotalRadeon'
import './gpu.scss'
import { GpuItems } from 'entities/gpu/index' 

export default function Gpu() {
  return (
    <div className='gpus-table'> 
      <div className='grid-gpus-conteiner'>
        <TotalGpus/>

        <TotalNvidia/>

        <TotalRadeon/>

        <div className='grid-gpus-subgrid'>
          <span>Accepted</span>

          <span>Rejected</span>

          <span>Hashrate</span>

          <span>Temp</span> 
          
          <span>Fan</span> 
          
          <span>Power</span> 
        </div>
      </div> 

      <div className='gpus-scroll-conteiner'> 
          <GpuItems/>
      </div>
    </div>

  )
}