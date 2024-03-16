import wal from '../assets/bourdaim.png'
import bens from '../assets/prime_bens.png'
import style from './css/slider.module.css'
function Slider() {
  return (
    <>
      <div className={style.slider}>

        <div>
          <img src={wal}></img>
          <p>walid nourdaim </p>
        </div>

        <div>
          <img src={bens}></img>
          <p>bensimoslik</p>
        </div>

      </div>
    </>
  )

}
export default Slider
