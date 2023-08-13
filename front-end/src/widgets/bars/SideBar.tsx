import './sideBar.scss' 

export default function SideBar() {
  return (
    <div className='flex-conteiner-vertical'> 
      <div className='imageLin'>
        image
      </div>

      <div className='flex-conteiner-vertical-cont'>
        <div className='flex-conteiner-vertical_element'>
          imageMiner
        </div>

        <div className='flex-conteiner-vertical_element'>
          imageOff
        </div> 
      </div>
    </div>
  )
}
