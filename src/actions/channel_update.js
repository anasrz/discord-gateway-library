class channelUpdate {
    constructor(data) {
        var event_data = data.data
        var emit = data.emit


        setTimeout(function () {
            emit.emit('channelUpdate',event_data)
                    }, 5)
    }
 }

 module.exports = channelUpdate