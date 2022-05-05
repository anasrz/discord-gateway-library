const WebSocket  = require('ws')
var EventEmitter = require('events')
const fetch = require('node-fetch')

var emitter = require('events').EventEmitter;

var em = new emitter();
const util = require('util')
const resolveIntents = require('../utils/resolveintent')
const ws = new WebSocket("wss://gateway.discord.gg/?v=9&encoding=json")

class Client {

    constructor(data){
 if(!data.intents) throw new Error(Client,'This Client Cannot Work With Out Intents')
 if(!data.token) throw new Error('Please Provice In Client Counstructor')
 const withourResolveIntents = data.intents
 const intents = resolveIntents(withourResolveIntents)

const token = data.token
let sequence = 0
let session_id = ''
let heartRec = true
const identifyPayload = {
    "op": 2,
    "d": {
        "token": token,
        "intents": intents,
        "properties": {
            "$os": "linux",
            "$browser": "my_library",
            "$device": "my_library"
        }
    }
}

const heartPayload = {
    "op": 1,
    "d": "sequence"
}

const resumePayload = {
    "op": 6,
    "d": {
        "token": token,
        "session_id": "session_id",
        "seq": "sequence"
    }
}

function connect() {

    ws.on('open', function () {
  
        ws.on('message', function incoming(message) {
            evaluate(JSON.parse(message), ws)
        });
    })
    ws.on('close', function (code, reason) {
        
        heartRec = true
        reconnect(ws)
    })

}



function evaluate(message, ws) {
    const opcode = message.op
    switch (opcode) {
        case 10:
        
            const heartbeat_interval = message.d.heartbeat_interval
            heartbeat(heartbeat_interval, ws)
            if (session_id)
                resume(ws)
            else
                identify(ws)
            break
        case 11:
      
            heartRec = true
            break
        case 0:
            let t = message.t
            sequence = message.s
            if (t === 'READY')
                session_id = message.d.session_id
       
            break
        case 1:
          
            heartPayload.d = sequence
            ws.send(JSON.stringify(heartPayload))
            break
        default:
      
    }
}



function heartbeat(interval, ws) {
    const timer = setInterval(function () {
        if (heartRec) {
            heartPayload.d = sequence
            ws.send(JSON.stringify(heartPayload))
         
            heartRec = false
        }
        else {
           
            heartRec = true
            clearInterval(timer)
            reconnect(ws)
        }

    }, interval)
}


function identify(ws) {
    identifyPayload.d.token = token
    ws.send(JSON.stringify(identifyPayload))
}

function resume(ws) {
    resumePayload.d.token = token
    resumePayload.d.session_id = session_id
    resumePayload.d.seq = sequence
    ws.send(JSON.stringify(resumePayload))
}

function reconnect(ws) {

    ws.close()
    connect()
}


connect()
const error = ['Discord API ERROR ']
ws.on('close', function (code, reason) {
if(code === 4000) throw new Error(error,`[${code}] - Unknown error`)

if(code === 4004) throw new Error(error,`[${code}] - INVALID TOKEN , Please Provide Correct Token	`)


if(code === 4008) throw new Error(error,`[${code}] - You Has Benn Rate Limited From This Action	`)

if(code === 4013) throw new Error(error,`[${code}] - 	Invalid intent(s) Please Provide Correct Intents	`)

if(code === 4014) throw new Error(error,`[${code}] - Disallowed intent(s)	You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for.`)





})

const  {MessageCreate,MessageUpdate,MessageDelete,ChannelCreate,ChannelUpdate,ChannelDelete,GuildBanAdd,GuildBanRemove,interactionCreate} = require('./actions/actions_route')

var you  = this

ws.addEventListener("message", function incomming(data) {
    var x = data.data;

    var payload = JSON.parse(x);
    const { t, event, op, d,s } = payload; 
 
switch(t) {
    case 'INTERACTION_CREATE' : {
        new interactionCreate({data : d,emit : you,token:token})
        break
    }
    case 'MESSAGE_DELETE' : {
        new MessageDelete({data : d,emit : you})
        break
    }
    case 'MESSAGE_UPDATE' : {
        new MessageUpdate({data : d,emit : you})
        break
    }
    case 'MESSAGE_CREATE' : {
        new MessageCreate({data : d,emit : you})
        break
    }
    case 'READY' : {

       
        setTimeout(function () {
            function userG() {
                return d.user
            }
you.emit('ready')

        }, 1)
    }
}
})
}

}

  /**
   * Create New Client
   * @param {Client} other For WebSocket Connection
   * @returns {Client}
   */

   util.inherits(Client, emitter)
  module.exports = ws
module.exports = Client