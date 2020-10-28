import { NODE_ENV, MYSQL_URL, MYSQL_PORT, MYSQL_DB } from '@environments'

const orm = {
	development: {
		url: MYSQL_URL!
	},
	testing: {
		url: MYSQL_URL!
	},
	staging: {
		host: 'localhost',
		port: MYSQL_PORT!,
		username: 'lovelp',
		password: 'mm123321',
		database: MYSQL_DB!
	},
	production: {
		url: MYSQL_URL!
	}
}

export default orm[NODE_ENV!]
