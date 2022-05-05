const {Intents, Client} = require('./route')

const client = new Client({token : 'token',intents : [Intents.GUILD_MEMBERS,Intents.GUILD_MESSAGES]})




client.on('ready',() => {
    console.log('dd')

})

client.on('messageCreate',message => {
    console.log(message)
})


client.on('interactionCreate',message => {
    message.reply({content : 'tst'})
    console.log(message)
})