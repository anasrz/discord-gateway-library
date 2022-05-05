class MessageUpdate {
    constructor(data) {
        var event_data = data.data
        var emit = data.emit


        setTimeout(function () {
            emit.emit('messageUpdate',event_data)
                    }, 5)
    }
 }

 module.exports = MessageUpdate