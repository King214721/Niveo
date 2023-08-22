const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yardım')
		.setDescription('Tüm eğik çizgi komutlarını listeler'),
	async execute(interaction) {
		await interaction.reply('/ping /n /destek /n /botbilgi');
	},
};
