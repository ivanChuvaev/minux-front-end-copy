import { NavLink } from 'react-router-dom' 

type NavigateLinkProps = {
  route: string,
  classActive: string, 
  text: string
}

export default function NavigateLink({route, classActive, text}: NavigateLinkProps) {
  return (
    <NavLink to={route} className={({isActive}) => isActive ? (classActive || '')  : ''}> 
          {text}  
    </NavLink>
  )
}