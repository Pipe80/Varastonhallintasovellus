async function loadOrders() {
  let result = await fetch('http://localhost:3000/api/openOrders')
  let orders = await result.json()
  showOrders(orders)
}

async function showOrders(orders) {
  let orderList = document.getElementById('orderList')
  // use this if backend is using XML format
  orders.orders.order.forEach(order => {
  // use this if backend is using JSON format
  //orders.forEach(order => {
    let liNode = document.createElement('li')
    let txtNode = document.createTextNode(`Customer: ${order.customer}, OrderID: ${order.orderID}`)
    liNode.appendChild(txtNode)
    orderList.appendChild(liNode)
  })
}