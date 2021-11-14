// push => +
// pop => -
// unshift  向前推    --\  倒序增
// shift    向后推    --/  增序删
// forEach => for i i++

const con1 = document.getElementById("content")
const date1 = document.getElementById("date")
const time1 = document.getElementById("time")
const addedBtn1 = document.getElementById("addedBtn")
const deleteBtn1 = document.getElementById("ddeleteBtn")
const list1 = document.getElementById("list")

const listContent = []

const render = () => {
  // function render() {

  let listStr = ''

  // listContent.forEach(function(item) {
  listContent.forEach(let item = () => {
    listStr = listStr + `
    <div class="item">
        <div>
            <p>名字：${item.con1}</p>
            <p>时间：${item.date1} ${item.time1}</p>
        </div>
    </div>
  `
  })
  list1.innerHTML = listStr
}

// addedBtn1.addEventListener('click', function() {
addedBtn1.addEventListener('click', () => {

  listContent.push({
    content: con1.value,
    date: date1.value,
    time: time1.value
  })

  render()
}

// deleteBtn1.addEventListener('click', function() {
deleteBtn1.addEventListener('click', () => {

  listContent.pop()

  render()
})
