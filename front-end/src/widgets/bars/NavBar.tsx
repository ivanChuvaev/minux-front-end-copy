import {NavigateLink} from 'shared/components';
import './navBar.scss' 
import HoverList from './HoverList';

const classActive: string = 'nav-link'; 

const monitoringOptions = [
  { id: 1, text: 'Main Page', url: '/monitoring/mainpage' }, 
];
const settingsOptions = [
  { id: 1, text: 'Flight Sheet', url: '/settings/flightsheet'},  
  { id: 2, text: 'GPUs', url: '/settings/gpu' },
]; 
// const analyticsOptions = [
//   { id: 1, text: 'Main Page', url: '/mainpage' }, 
// ];
const systemOptions = [
  { id: 1, text: 'GPUs', url: '/system/gpus' }, 
  { id: 2, text: 'CPU', url: '/system/cpu' }, 
  { id: 3, text: 'Motherboard', url: '/system/motherboard' }, 
  { id: 4, text: 'RAM', url: '/system/ram' }, 
  { id: 5, text: 'Storage', url: '/system/storage' }, 
];

export default function NavBar() { 
  return (
    <div className='border-line-flex'>
      <div className='flex-conteiner-horizontal'> 
        <HoverList options={monitoringOptions}>
          <NavigateLink route='/monitoring' classActive={classActive} text='Monitoring' />
        </HoverList>
        
        <HoverList options={settingsOptions}>
          <NavigateLink route='/settings' classActive={classActive} text='Settings' />
        </HoverList>

        <HoverList>
          <NavigateLink route='/analytics' classActive={classActive} text='Analytics' />
        </HoverList>

        <HoverList options={systemOptions}>
          <NavigateLink route='/system' classActive={classActive} text='System' />
        </HoverList>
      </div>
    </div>
  )
}