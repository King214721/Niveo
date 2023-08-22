const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('destek')
		.setDescription('Destek sunucusuna yönlendirir!'),
	async execute(interaction) {
		await interaction.reply('Bu linke bakmanızı tavsiye ederim: https://discord.gg/q27D3qVXZ3!');
	},
};
