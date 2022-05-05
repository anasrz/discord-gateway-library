class guildBanRemove {
    constructor(data) {
        var event_data = data.data
        var emit = data.emit


        setTimeout(function () {
            emit.emit('guildBanRemove',event_data)
                    }, 5)
    }
 }

 module.exports = guildBanRemove