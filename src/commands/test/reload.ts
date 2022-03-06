import { Command } from "../../client/Command";

export const command = new Command({
    description: "Reboots the bot",
    
    args: [],
    execute: async (message, args, self, client) => {
        await message.reply(`Reloading...`)
        await client.onReady()
        await message.reply(`Reloaded!`)
    }
})