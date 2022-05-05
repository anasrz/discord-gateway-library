const  fetch = require('node-fetch')
class interaction {
    constructor(data) {
        var d = data.data
        var emit = data.emit
        var token = data.token


        setTimeout(function () {
            emit.emit('interactionCreate',d)
                    }, 5)
                    let URL = `https://discord.com/api/v9/interactions/${d.id}/${d.token}/callback`;
                    function repl(content) {
           
                        var requestOptions = {
                          method: 'POST',
                          headers: {
                           "Authorization": `Bot ${token}`,
                           "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                          "type": 4,
                          "data": content,
                      })
              };
          
              fetch(URL, requestOptions)
                    .then(response => response.text())
                    .then(console.log)
                    .catch(console.error);
                      }
                      d.reply = repl
                      function moddd(content) {
             
                        var requestOptions = {
                          method: 'POST',
                          headers: {
                           "Authorization": `Bot ${token}`,
                           "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                          "type": 9,
                          "data": content,
                      })
              };
          
              fetch(URL, requestOptions)
                    .then(response => response.text())
                    .then(console.log)
                    .catch(console.error);
                      }
          function getttt(id) {
          
          let q1 = ''
          let q2 = ''
          let q3 = ''
          let q4 = ''
          let q5 = ''
          let qq1 = ''
          let qq2 = ''
          let qq3 = ''
          let qq4 = ''
          let qq5 = ''
        
        if(d.data.components[0] === undefined) {
        }else{
            q1 =   d.data.components[0].components[0].custom_id
        
            qq1 =   d.data.components[0].components[0].value
        }
        if(d.data.components[1] === undefined) {
        }else{
            q2 =   d.data.components[1].components[0].custom_id
            
            qq2 =   d.data.components[1].components[0].value
        }
        if(d.data.components[2] === undefined) {
        }else{
            q3 =   d.data.components[2].components[0].custom_id
            
            qq3 =   d.data.components[2].components[0].value
        }
        if(d.data.components[3] === undefined) {
        }else{
            q4 =   d.data.components[3].components[0].custom_id
            
            qq4 =   d.data.components[3].components[0].value
        }
        
        if(d.data.components[4] === undefined) {
        }else{
            q5 =   d.data.components[4].components[0].custom_id
            
            qq5 =   d.data.components[4].components[0].value
        }
        
        
        
          
        if(q1 === id) return qq1
        if(q2 === id) return qq2
        if(q3 === id) return qq3
        if(q4 === id) return qq4
        if(q5 === id) return qq5
          }        
          function dfr() {
           
            var requestOptions = {
              method: 'POST',
              headers: {
               "Authorization": `Bot ${token}`,
               "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "type": 5,
              "data": {},
          })
        };
        
        fetch(URL, requestOptions)
        .then(response => response.text())
        .then(console.log)
        .catch(console.error);
          }
          d.viewModal = moddd
          d.defferReply = dfr
          d.getTextValue = getttt
    }
 }

 module.exports = interaction