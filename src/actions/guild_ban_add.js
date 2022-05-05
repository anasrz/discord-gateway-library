class guildBanAdd {
    constructor(data) {
        var event_data = data.data
        var emit = data.emit


        setTimeout(function () {
            emit.emit('guildBanAdd',event_data)
                    }, 5)
    }
 }

 module.exports = guildBanAdd