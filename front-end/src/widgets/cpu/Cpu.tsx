import React from 'react' 
import './cpu.scss'
import { useSelector } from 'react-redux';
import { RootState } from 'app/store'; 
import { valueOrNA } from 'shared/utils';

const getFullName = (cpuManufacturer:any, cpuModelName: any) => {
  if ((typeof(cpuManufacturer) === "string") && (typeof(cpuModelName) === "string")) {

    const cpuFullName: string = cpuManufacturer + cpuModelName;
    
    return cpuFullName
  } 
}

export default function Cpu() {
  const cpuManufacturer = useSelector((state: RootState) => state.staticData.data?.cpu.information.manufacturer);
  const cpuModelName = useSelector((state: RootState) => state.staticData.data?.cpu.information.modelName); 
  
  const cpuFullName = getFullName(cpuManufacturer, cpuModelName); 

  const cpuDynamic = useSelector((state: RootState) => state.dynamicData.data?.cpu);
  return (
    <div className='border-line'> 
      <div className='flex-conteiner-cpu'> 
          <div className='cpu-conteiner'>
            <span>CPU</span>
            <span className='text'>{valueOrNA(cpuFullName)}</span>
          </div> 

          <div className='cpu-info'> 
            <div className='cpu-info-element'>
            <div className='flex justify-between'>
              <span className='text'>Shares accepted:</span>
              <span>{valueOrNA(cpuDynamic?.shares.accepted)}</span>
          </div>

          <div className='flex justify-between'>
              <span className='text'>Shares rejected:</span>
              <span>{valueOrNA(cpuDynamic?.shares.rejected)}</span>
          </div> 
          </div>

          <div className='cpu-info-element'>
              <div className='flex justify-between'>
                <span className='text'>Hashrate:</span>
                <span>{valueOrNA(cpuDynamic?.hashrateMg)} H/s</span>
              </div> 

              <div className='flex justify-between'>
                <span className='text'>Power:</span>
                <span>{valueOrNA(cpuDynamic?.powerUsage)} Watt</span>
              </div> 
          </div>

          <div className='cpu-info-element'>
              <div className='flex justify-between'>
                <span className='text'>Clock Speed:</span>
                <span>{valueOrNA(cpuDynamic?.clockSpeed)} Mhz</span>
              </div>
              
              <div className='flex justify-between'>
                <span className='text'>Temperature:</span>
                <span>{valueOrNA(cpuDynamic?.temperatureCelcius)} °C</span>
              </div> 
          </div>
        </div>
      </div> 
    </div>
  )
}