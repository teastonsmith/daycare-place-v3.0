const bcrypt = require('bcryptjs');

module.exports = {
	register: async (req, res) => {
		const { first_name, last_name, email, username, password } = req.body;
		const db = req.app.get('db');
		const { session } = req;
		const userFound = await db.check_user_email({ email });
		if (userFound[0]) return res.status(409).send('Email already exists');
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		const createdUser = await db.register_user({
			first_name,
			last_name,
			email,
		});
		const balance = await db.create_user_balance({user_id: createdUser[0].user_id})
		const userInfo = await db.register_user_info({username, password: hash, user_id: createdUser[0].user_id})
		session.user = {
			id: createdUser[0].user_id,
			username: userInfo[0].username,
			first_name: createdUser[0].first_name,
			balance: balance[0].balance
		};
		res.status(200).send(session.user);
	},
	login: async (req, res) => {
		const { username, password } = req.body;
		const db = req.app.get('db');
		const { session } = req;
		const userFound = await db.check_username({ username });
		if (!userFound[0]) return res.status(401).send('User does not exist');
		const authenticated = bcrypt.compareSync(password, userFound[0].password);
		if (authenticated) {
			session.user = {
				id: userFound[0].user_id,
				username: userFound[0].username,
				first_name: userFound[0].first_name,
				balance: userFound[0].balance
			};
			res.status(200).send(session.user);
		} else {
			return res.status(401).send('Incorrect username or password');
		}
	},
	getDetails: async (req, res) => {
		const db = req.app.get('db');
		const { session } = req;
		if (session.user) {
			const details = await db.get_user_details({ id: session.user.id });
			const { first_name, email, balance, user_id } = details[0];
			return res.status(200).send({
				first_name,
				email,
				balance,
				user_id,
				username: session.user.username,
			});
		}
		return res.status(401).send('Please log in to your account');
	},
	getUser: (req, res) => {
		const { session } = req;
		if (session.user) {
			return res.status(200).send(session.user);
		}
	},
	logout: (req, res) => {
		req.session.destroy();
		res.sendStatus(200);
	},
	updateUser: async (req, res) => {
		console.log(req.session.user)
		const{first_name}=req.body
		const db = req.app.get('db');
		await db.update_first_name({first_name, user_id: req.session.user.id})
		req.session.user.first_name = {
			first_name
		}
		res.status(200).send(req.session.user.first_name)
	},

	deleteUser: async (req, res) => {
		const db = req.app.get('db')
	await db.delete_user({ user_id: req.session.user.id });
	res.status(200).send('User Deleted')
	},
};
