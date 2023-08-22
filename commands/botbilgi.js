const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('botbilgi')
		.setDescription('Bot ile ilgili bilgileri verir.'),
	async execute(interaction) {
		await interaction.reply('Katılma Tarihi: 17 Ağustos 2023 /n Geliştirici: fly-#flybuny /n Kullanılan kodlama dili: JavaScript /n kullanılan dosyalar: node.js ve discord.js /n Anlık ping, sunucu bilgisi gibi pek çok şeyi gösterebilir.');
	},
};
