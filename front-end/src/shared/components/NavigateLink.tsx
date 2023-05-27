import { NavLink } from 'react-router-dom' 

type NavigateLinkProps = {
  route: string,
  classActive: string,
  className: string,
  text: string
}

export default function NavigateLink({route, classActive, className, text}: NavigateLinkProps) {
  return (
    <NavLink to={route} className={({isActive}) => isActive ? classActive : ''}> 
      <div className={className}> 
          {text}
      </div> 
    </NavLink>
  )
}