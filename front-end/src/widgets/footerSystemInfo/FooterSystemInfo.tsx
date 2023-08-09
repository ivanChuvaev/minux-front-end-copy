import './footerSystemInfo.scss';

export default function FooterSystemInfo() {
  return (
    <div className='footer-system-info'>
        <div className='footer-grid'>
            <div className='flex justify-center gap-5'>
                <div className='flex flex-col text-right opacity-[65%]'>   
                    <p>MB</p>
                    <p>CPU</p>
                    <p>Disk</p>
                    <p>System</p>
                </div>
                <div className='flex flex-col text-left'>
                    <p>{}</p>
                    <p>{}</p>
                    <p>{}</p>
                    <p>{}</p>
                </div>
            </div>  
            <div className='flex justify-center gap-5'>
                <div className='flex flex-col text-right opacity-[65%]'>   
                    <p>OpenCL</p>
                    <p>CUDA </p>
                    <p>Driver</p>
                    <p>Minux Ver.</p>
                </div>
                <div className='flex flex-col text-left'>
                    <p>{}</p>
                    <p>{}</p>
                    <p>{}</p>
                    <p>{}</p>
                </div>
            </div>  
            <div className='flex justify-center gap-5'>
                <div className='flex flex-col text-right opacity-[65%]'>   
                    <p>Local IP</p>
                    <p>Global IP</p>
                    <p>MAC-adress</p> 
                </div>
                <div className='flex flex-col text-left'>
                    <p>{}</p>
                    <p>{}</p>
                    <p>{}</p> 
                </div>
            </div>  
        </div>
    </div>
  )
}