import {useState, useEffect} from "react";

const CheckList = (props) {
  <ul>
    {
      props.items.map((item)=>{
        <li key={item.id}>
          {item.text}
        </li>
      })
    }
  </ul>
}

function CheckApp() {
  const [items, setItems] = useState([])
}
