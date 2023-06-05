const { XMLValidator } = require('fast-xml-parser')

const xmlFile = `
<orders>
  <order>
    <orderID>1</orderID>
    <customer>Pentti</customer>
    <address>Pentinkatu 1</address>
    <item1>
      <name>Nappi</name>
      <productID>1</productID>
    </item1>
    <item2>
      <name>Lanka</name>
      <productID>2</productID>
    </item2>
    <item3>
      <name>Ohje</name>
      <productID>3</productID>
    </item3>
  </order>
</orders>`

const result = XMLValidator.validate(xmlFile)
if (result === true) {
  console.log('XML-file is valid', result)
} else {
  console.log(`XML is invalid: ${result.err.msg}`, result)
}