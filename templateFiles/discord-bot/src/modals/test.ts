import { ModalSubmitInteraction } from 'discord.js';

export const name = // 'test'
  __filename.split('\\').join('/')
    .split('/')
    .pop()
    .split('.')
    .shift();
export const execute = async (interaction: ModalSubmitInteraction) => {
  await interaction.reply('this is an example');
};
