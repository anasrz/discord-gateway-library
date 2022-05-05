class MessageCreate {
    constructor(data) {
        var event_data = data.data
        var emit = data.emit


        setTimeout(function () {
            emit.emit('messageCreate',event_data)
                    }, 5)
    }
 }

 module.exports = MessageCreate