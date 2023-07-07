async function loadOrders() {
  let result = await fetch('http://localhost:3000/api/getAllOrders')
  let orders = await result.json()
  showOrders(orders)
}

async function showOrders(orders) {
  if (orders.message) {
    let errorMessage = document.getElementById('errorMessage')
    let errorText = document.createTextNode(orders.message)
    errorMessage.appendChild(errorText)
  }
  let orderList = document.getElementById('orderList')  
  orders.forEach(order => {    
    let liNode = document.createElement('li')
    let txtNode = document.createTextNode(`Customer: ${order.order.customer}, OrderID: ${order.order.order_id}`)
    liNode.appendChild(txtNode)
    orderList.appendChild(liNode)
  })

  // HTML table => variable 'tableNode'
  let tableNode = document.getElementById('orderTable')  
  orders.forEach(order => {
    // First we create headers for orderID, customer and address
    // Let's create headers for each order
    let th1Node = document.createElement('th')
    let th2Node = document.createElement('th')
    let th3Node = document.createElement('th')
    let th4Node = document.createElement('th')
    // Let's create text for the headers
    let td1TxtNode = document.createTextNode('OrderID')
    let td2TxtNode = document.createTextNode('Status')
    let td3TxtNode = document.createTextNode('Customer')
    let td4TxtNode = document.createTextNode('Address')
    // Add header texts to header nodes
    th1Node.appendChild(td1TxtNode)
    th2Node.appendChild(td2TxtNode)
    th3Node.appendChild(td3TxtNode)
    th4Node.appendChild(td4TxtNode)
    // Add header nodes to table
    tableNode.appendChild(th1Node)
    tableNode.appendChild(th2Node)
    tableNode.appendChild(th3Node) 
    tableNode.appendChild(th4Node) 

    // Then we create headers for items
    for (let i = 0; i < order.order.items.item.length; i++) {
      let itemNro = i + 1
      // Create a header for each item.name
      let th1Node = document.createElement('th')
      // Create a txt node for each item.name
      let th1TxtNode = document.createTextNode('Item' + itemNro + ' name')
      // Create a header for each item.productID
      let th2Node = document.createElement('th')
      // Create a txt node for each item.productID
      let th2TxtNode = document.createTextNode('Item' + itemNro + ' product ID')
      // Create a header for each item.itemStatus
      let th3Node = document.createElement('th')
      // Create a txt node for each item.itemStatus
      let th3TxtNode = document.createTextNode('Item' + itemNro + ' status')
      // Add headers texts to headers
      th1Node.appendChild(th1TxtNode)
      th2Node.appendChild(th2TxtNode) 
      th3Node.appendChild(th3TxtNode) 
      // Add headers to table
      tableNode.appendChild(th1Node)
      tableNode.appendChild(th2Node)
      tableNode.appendChild(th3Node)
    }

    // Then we create data shells for 
    // orderID, customer and address information
    // Create a new row to our table
    let trNode = document.createElement('tr')
    // Create new data shells for our table
    let td1Node = document.createElement('td')
    let td2Node = document.createElement('td')
    let td3Node = document.createElement('td')
    let td4Node = document.createElement('td')
    // Order number, customer name and customer address
    let th1TxtNode = document.createTextNode(`${order.order.order_id}`)
    let th2TxtNode = document.createTextNode(`${order.order.order_status}`)
    let th3TxtNode = document.createTextNode(`${order.order.customer}`)
    let th4TxtNode = document.createTextNode(`${order.order.address}`)
    // Add order number, customer name and 
    // customer address to data shells
    td1Node.appendChild(th1TxtNode)
    td2Node.appendChild(th2TxtNode)
    td3Node.appendChild(th3TxtNode)
    td4Node.appendChild(th4TxtNode)
    // Add data shells to table row
    trNode.appendChild(td1Node)
    trNode.appendChild(td2Node)
    trNode.appendChild(td3Node)
    trNode.appendChild(td4Node)
    // Add table row to table
    tableNode.appendChild(trNode)

    // Lastly we create data shells for item names
    for (let i = 0; i < order.order.items.item.length; i++) {
      // Create data shell for item.name
      let td1Node = document.createElement('td')
      // Create txt node for item.name
      let td1TxtNode = document.createTextNode(order.order.items.item[i].name)
      // Create data shell for item.productID
      let td2Node = document.createElement('td')
      // Create txt node for item.productID
      let td2TxtNode = document.createTextNode(order.order.items.item[i].product_id)
       // Create data shell for item.itemStatus
       let td3Node = document.createElement('td')
       // Create txt node for item.itemStatus
       let td3TxtNode = document.createTextNode(order.order.items.item[i].item_status)
      // Add item.name to data shell
      td1Node.appendChild(td1TxtNode)      
      // Add item.name data shell to table row
      trNode.appendChild(td1Node)
      // Add item.productID to data shell
      td2Node.appendChild(td2TxtNode)
      // Add item.productID data shell to table row
      trNode.appendChild(td2Node) 
      // Add item.itemStatus to data shell
      td3Node.appendChild(td3TxtNode) 
      // Add item.productID data shell to table row
      trNode.appendChild(td3Node)      
      // Add table row to table
      tableNode.appendChild(trNode)
    }  
  })  
}