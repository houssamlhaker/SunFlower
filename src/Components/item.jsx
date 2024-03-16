import { useState } from 'react'
import style from './css/item.module.css'
// use map(()=> <li>) 
function Item() {
  const [myList, setMyList] = useState(["houssam"]);
  const [val, setVal] = useState("");

  const changer = event => {
    setVal(event.target.value);
  };

  const submit = () => {
    if (val != "") {
      setMyList([...myList, val])
      setVal("");
    }
  };
  return (<>
    <div className={style.text} >
      <h2>Spinning Wheel items</h2>
      <input onChange={changer} value={val}></input>
      <ul className={style.list}>
        {myList.map((currentValue, index) => <li key={index}>{currentValue}</li>)}
      </ul>
      <button onClick={() => { submit() }}>Submit</button>
    </div>
  </>);
}
export default Item 
