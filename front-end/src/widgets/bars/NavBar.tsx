import {NavigateLink} from 'shared/components';
import './navBar.scss' 

const classActive: string = 'nav-link';
const className: string = 'flex-conteiner-horizontal_element';

export default function NavBar() { 
  return (
    <div className='border-line-flex'>
      <div className='flex-conteiner-horizontal'> 
          <NavigateLink route='/monitoring' classActive={classActive} className={className} text='Monitoring'/> 

          <NavigateLink route='/settings' classActive={classActive} className={className} text='Settings'/>

          <NavigateLink route='/analytics' classActive={classActive} className={className} text='Analytics'/>

          <NavigateLink route='/system' classActive={classActive} className={className} text='System'/> 
      </div>
    </div>
  )
}