async function loadOrders() {
  let result = await fetch('http://localhost:3000/api/openOrders')
  let orders = await result.json()
  showOrders(orders)
}

async function showOrders(orders) {
  let orderList = document.getElementById('orderList')
  orders.forEach(order => {
    let liNode = document.createElement('li')
    let txtNode = document.createTextNode(`Customer: ${order.customer}, OrderID: ${order.orderID}`)
    liNode.appendChild(txtNode)
    orderList.appendChild(liNode)
  })
}