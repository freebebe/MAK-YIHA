import {useState} from "react"
import ReactDOM from 'react-dom';

function TimerCheck() {
  const [secElapased, setSecElapased] = useState(0)

  const check = ()=>{setSecElapased(secElapased: {secElapased}+1)}

  return(
    <div>
      timse out: {secElapased}
    </div>
  )
}
