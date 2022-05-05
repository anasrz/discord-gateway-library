const MessageCreate = require('./message_create')
const MessageUpdate = require('./message_update')
const MessageDelete = require('./message_delete')

//////////////////////////////////////////////////

const ChannelCreate = require('./channel_create')

const ChannelUpdate = require('./channel_update')


const ChannelDelete = require('./channel_Delete')

/////////////////////////////////////////

const GuildBanAdd = require('./guild_ban_add')

const GuildBanRemove = require('./guild_ban_remove')

const interactionCreate = require('./interactionCreate')
module.exports = {MessageCreate,MessageUpdate,MessageDelete,ChannelCreate,interactionCreate,ChannelUpdate,ChannelDelete,GuildBanAdd,GuildBanRemove}