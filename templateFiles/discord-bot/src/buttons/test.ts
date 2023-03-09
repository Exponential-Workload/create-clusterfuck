import { ButtonInteraction } from 'discord.js';

export const name = // 'test'
  __filename.split('\\').join('/')
    .split('/')
    .pop()
    .split('.')
    .shift();
export const execute = async (interaction: ButtonInteraction) => {
  await interaction.reply('this is an example');
};
