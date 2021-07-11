

const dbRef = firebase.database().ref()
const projRef = dbRef.child('project')
projRef.on("value", function(snapshot) {
      const mainData = snapshot.val()
      const dataKeys = Object.keys(mainData)
      const mainBody = document.getElementById('mainBody')
      
      dataKeys.forEach(ele => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.appendChild(document.createTextNode(ele))
        tr.appendChild(td)
        for (const [key,value] of Object.entries(mainData[ele])) {
            let td = document.createElement('td')
            if (Array.isArray(mainData[ele][key])) {
                td.appendChild(document.createTextNode(mainData[ele][key][0]))
                tr.appendChild(td)
                mainBody.appendChild(tr)
                td = document.createElement('td')
                td.appendChild(document.createTextNode(mainData[ele][key][1]))
                tr.appendChild(td)
                mainBody.appendChild(tr)
            }
            else {
                td.appendChild(document.createTextNode(mainData[ele][key]))
                tr.appendChild(td)
                mainBody.appendChild(tr)
                
            }
            
        }
        console.log(mainData[ele])
        
        
        
        
        
      })
      //console.log(dataKeys)
   }, function (error) {
      console.log("Error: " + error.code)
   })




/* write ex
const dbRef = firebase.database().ref('project/')
dbRef.update({
    "drywall": {
        "compdate": "8/1/21",
        "item": "Drywall Tape",
        "price": "20.00"
      }
})*/
