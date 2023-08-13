import { useSelector } from 'react-redux';
import './footerSystemInfo.scss'; 
import { RootState } from 'app/store';
import valueOrNA from 'shared/utils/valueOrZero';

export default function FooterSystemInfo() { 
    const systemInfo = useSelector((state: RootState) => state.staticData.data?.systemInfo);

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
                    <p>{valueOrNA(systemInfo?.motherBoard)}</p>
                    <p>{valueOrNA(systemInfo?.cpu)}</p>
                    <p>{valueOrNA(systemInfo?.hd)}</p>
                    <p>{valueOrNA(systemInfo?.system)}</p>
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
                    <p>{valueOrNA(systemInfo?.openCl)}</p>
                    <p>{valueOrNA(systemInfo?.cuda)}</p>
                    <p>{valueOrNA(systemInfo?.driver)}</p>
                    <p>{valueOrNA(systemInfo?.minuxVer)}</p>
                </div>
            </div>  
            <div className='flex justify-center gap-5'>
                <div className='flex flex-col text-right opacity-[65%]'>   
                    <p>Local IP</p>
                    <p>Global IP</p>
                    <p>MAC-adress</p> 
                </div>
                <div className='flex flex-col text-left'>
                    <p>{valueOrNA(systemInfo?.localIp)}</p>
                    <p>{valueOrNA(systemInfo?.globalIp)}</p>
                    <p>{valueOrNA(systemInfo?.macAdress)}</p> 
                </div>
            </div>  
        </div>
    </div>
  )
}