import pool from '../db';

const getAllTenants = (req: any, res: any) => {
	pool.query('SELECT * FROM tenants', (err: any, dbRes: any) => {
		if (err) console.log('owners error', err);
		res.send(dbRes.rows);
		console.log(dbRes.rows);
	});
};

const addTenant = (req: any, res: any) => {
	// const { name, email, password } = req.body;
	// pool.query('INSERT INTO users(name,email,password) VALUES($1,$2,$3)', [name, email, password], (err, dbRes) => {
	// 	if (err) console.log('error', err);
	// 	res.send(dbRes.rows);
	// });
};

const getTenantDetail = (req: any, res: any) => {
	// const hashedPassword = bcrypt.hashSync(req.body.password, 8);
	// const token = jwt.sign({ id: 1234 }, 'secret', {
	// 	expiresIn: 86400, // expires in 24 hours
	// });
	// res.status(200).send({ auth: true, token });
};

const updateTenant = (req: any, res: any) => {
	// const { id } = req.params;
	// const { name, email, password } = req.body;
	// pool.query(
	// 	'UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4',
	// 	[name, email, password, id],
	// 	(err, dbRes) => {
	// 		if (err) res.send(err);
	// 		res.send('Details updated succesfully!');
	// 	},
	// );
};

const deletTenant = () => {};

export default { getAllTenants, addTenant, getTenantDetail, updateTenant, deletTenant };
