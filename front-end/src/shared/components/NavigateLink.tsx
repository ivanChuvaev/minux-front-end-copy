import { NavLink } from 'react-router-dom' 

type NavigateLinkProps = {
  route: string,
  cancel?: boolean,
  classActive: string, 
  text: string
}

export default function NavigateLink({route, cancel, classActive, text}: NavigateLinkProps) {
  const handleCancel = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); 
  };

  if (cancel) {
    return (
      <NavLink to={route} onClick={handleCancel} className={({isActive}) => isActive ? (classActive || '')  : 'non-active'}> 
              {text}  
        </NavLink> 
    )
  }
  return (
    <NavLink to={route} className={({isActive}) => isActive ? (classActive || '')  : ''}> 
              {text}  
        </NavLink> 
  )
  
}