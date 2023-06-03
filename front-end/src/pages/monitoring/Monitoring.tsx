import React from 'react' 
import './monitoring.scss'
import WorkerWidget from 'widgets/workers'
import SharesWidget from 'widgets/shares'
import PowerRamWidget from 'widgets/power&ram'

export default function Monitoring() { 
    return (
        <div className='flex-conteiner-monitoring'> 
            <WorkerWidget/> 

            <PowerRamWidget/>

            <SharesWidget/>   
        </div>
  )
}