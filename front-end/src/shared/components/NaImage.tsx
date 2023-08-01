import na from 'shared/images/na.svg'
import 'app/values.scss'

type Props = {
    width: string, 
}

export default function NaImage({width}: Props) {
  return (
    <div style={{width: width, height: 'auto'}}>
        <img className='img-no-drag' src={na} alt='n/a'/>
    </div>
  )
}