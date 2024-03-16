import style from './css/search.module.css'
import logo from '../assets/3a3a3ot.png'
function Search() {
  return (
    <>
      <div className={style.searchDiv}>

        <img src={logo} className={style.logo} ></img>

        <div className={style.searchBar}>
          <h2  >Search</h2>
          <input ></input>
        </div>

        <div className={style.nav} >
          <h2 >About </h2>
          <h2 >Projects</h2>
          <h2 >Blogs</h2>
          <h2 >Login</h2>
        </div>

      </div>
    </>)

}
export default Search
//import { useState } from "react";
//const Checkbox = ({ label }) => {
//  const [isChecked, setIsChecked] = useState(false);
//  return (
//    <div className="checkbox-wrapper">
//      <label>
//        <input type="checkbox" checked={isChecked} />
//        <span>{label}</span>
//      </label>
//    </div>
//  );
//};
//export default Checkbox;
//const Checkbox = ({ label }) => {
// ...
//  return (
//    <div className="checkbox-wrapper">
//      <label>
//        <input
//          // ...
//          onChange={() => setIsChecked((prev) => !prev)}
//        />
//        {/* ... */}
//      </label>
//      <p>{isChecked ? "Selected" : "Unchecked"}</p>
//    </div>
//  );
//};
//export default Checkbox;
