import React from 'react' 
import './cpu.scss'
import { useSelector } from 'react-redux';
import { RootState } from 'app/store'; 
import { valueOrNA } from 'shared/utils';

export default function Cpu() {
  const cpuName = useSelector((state: RootState) => state.cpuStatic.data?.information.modelName); 
  const cpuDynamic = useSelector((state: RootState) => state.cpuDynamic.data);
  return (
    <div className='border-line'> 
      <div className='flex-conteiner'> 
          <div className='cpu-conteiner'>
            <span>CPU</span>
            <span className='text'>{valueOrNA(cpuName)}</span>
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
                <span>{valueOrNA(cpuDynamic?.hashrateMg)}</span>
              </div> 

              <div className='flex justify-between'>
                <span className='text'>Power:</span>
                <span>{valueOrNA(cpuDynamic?.powerUsage)}</span>
              </div> 
          </div>

          <div className='cpu-info-element'>
              <div className='flex justify-between'>
                <span className='text'>Clock Speed:</span>
                <span>{valueOrNA(cpuDynamic?.clockSpeed)}</span>
              </div>
              
              <div className='flex justify-between'>
                <span className='text'>Temperature:</span>
                <span>{valueOrNA(cpuDynamic?.temperatureCelcius)}</span>
              </div> 
          </div>
        </div>
      </div> 
    </div>
  )
}