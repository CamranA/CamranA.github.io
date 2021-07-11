const dbRef = firebase.database().ref()
const projRef = dbRef.child('project')


projRef.once('value', function(snapshot){
    snapshot.forEach(function(data) {
        let content = ''
        let comp = data.val().comp
        let compDate = data.val().compdate
        let items = data.val().item
        let myKey = data.key
        console.log(items)
        console.log(comp)
        console.log(compDate)
        console.log(myKey)
        
        content+= '<td><em>' + myKey + '</em></td>'
        content+= '<td></td>'
        content+= '<td></td>'
        content+= `<td><input type="date" value=${compDate}>` + '</td>'
        content+= '<td>' + comp + '</td>'
        document.getElementById('mainBody').innerHTML += content
        content = '<tr>'
        for (const [key, value] of Object.entries(items)) {
            content+= '<td></td>'
            content+= '<td>' + key + '</td>'
            content+= '<td>' + value + '</td>'
            content+= '<td></td>'
            content+= '<td></td>'
        }
        content += '</tr>'
        document.getElementById('mainBody').innerHTML += content
        
        
        

    })
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
