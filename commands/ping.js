const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Botun ping seviyesini gösterir.'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
