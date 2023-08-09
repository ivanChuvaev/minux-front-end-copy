import './footerSystemInfo.scss';

export default function FooterSystemInfo() {
  return (
    <div className='footer-system-info'>
        <div className='footer-grid'>
            <div className='flex'>
                <div className='flex flex-col'>   
                    <p>MB</p>
                    <p>CPU</p>
                    <p>Disk</p>
                    <p>System</p>
                </div>
            </div>  
            <div className='flex'>
                <div className='flex flex-col h-fit justify-between'>   
                    <p>MB</p>
                    <p>CPU</p>
                    <p>Disk</p>
                    <p>System</p>
                </div>
            </div> 
            <div className='flex'>
                <div className='flex flex-col'>   
                    <p>Local IP</p>
                    <p>Global IP</p>
                    <p>MAC adress</p>
                    <p>System</p>
                </div>
            </div> 
        </div>
    </div>
  )
}