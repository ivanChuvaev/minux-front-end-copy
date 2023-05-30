import React from 'react' 
import './monitoring.scss'
import WorkerWidget from 'widgets/workers'

export default function Monitoring() { 
    return (
        <div className='flex-conteiner-monitoring'> 
            <WorkerWidget/> 
        </div>
  )
}