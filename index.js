import DISCORDJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DISCORDJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,

    ]
}) 

client.on('ready', () => {
    console.log('bot is ready!')
}) 

client.on('messageCreate', (message) => {
    if (message.content === 'T!'){
        message.reply({
            content: 'HI! What do you wanna watch today?'
        })
    }
})


client.login(process.env.TOKEN)