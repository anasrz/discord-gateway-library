class MessageDelte {
    constructor(data) {
        var event_data = data.data
        var emit = data.emit


        setTimeout(function () {
            emit.emit('messageDelete',event_data)
                    }, 5)
    }
 }

 module.exports = MessageDelte