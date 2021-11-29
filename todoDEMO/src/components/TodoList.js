const TodoList =() => {
  return(
    <ul>
    props.items.map((item)=>(
      <li key={item.id}>
          {item.text}
      </li>
    ))
    </ul>
  )
}
