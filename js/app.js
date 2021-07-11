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
        if (comp === 'y') {
            content+= `<td><select id="comp${myKey}"><option value="y" selected>y</option><option value="n">n</option></td>`
        }
        else {
            content+= `<td><select id="comp${myKey}"><option value="y">y</option><option value="n" selected>n</option></td>`
        }
        
        document.getElementById('mainBody').innerHTML += content
        content = '<tr>'
        for (const [key, value] of Object.entries(items)) {
            content+= '<td></td>'
            content+= '<td>' + key + '</td>'
            if (value === 'y') {
                content+= `<td><select id="aquire${key}"><option value="y" selected>y</option><option value="n">n</option></td>`
            }
            else {
                content+= `<td><select id="aquire${key}"><option value="y">y</option><option value="n" selected>n</option></td>`
            }
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
