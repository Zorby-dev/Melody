import { Command } from "../../client/Command";

export const command = new Command({
    aliases: [
        "pp"
    ],
    description: "",
    category: ":tools: Miscellaneous",
    
    args: [],
    execute: async (message) => {
        message.reply(`Current ping is ${Date.now() - message.createdTimestamp}ms`)
    }
})