const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app
	.use(bodyParser.json())
	.use(express.static(__dirname + '/public'))
	.engine('html', require('ejs').renderFile)
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
	.get('/discord', (req, res) => res.sendFile(__dirname + '/views/discord.html'))
	.get('/cbch', (req, res) => res.sendFile(__dirname + '/views/cbch.html'))
	.get('/cbch/:type', (req, res) => {
		const types = ['ticket', 'modmail', 'giveaway', 'custom'];
		const type = req.params.type;
		if (types.includes(type)) {
			res.sendFile(__dirname + `/views/cbch/${type}.html`);
		};
	})
	.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'))

	.get('/donate', (req, res) => res.redirect('https://shortrsg.cf/donate'))
	.listen(8081);