const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sunucubilgi')
		.setDescription('Sunucu hakkındaki bilgiyi gösterir'),
	async execute(interaction) {
		await interaction.reply('Niveo Destek Sunucusu /n kurulma tarihi: 19 Nisan 2023 /n Kurucu: fly - #flybuny');
	},
};
