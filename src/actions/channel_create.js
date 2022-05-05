class channelCreate {
    constructor(data) {
        var event_data = data.data
        var emit = data.emit


        setTimeout(function () {
            emit.emit('channelCreate',event_data)
                    }, 5)
    }
 }

 module.exports = channelCreate