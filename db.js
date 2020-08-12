const pg = require("pg");
const services = require("./src/services");

const client = new pg.Client(
	process.env.DATABASE_URL || "postgres://localhost/football_db"
);

client.connect();

const sync = async () => {
	const SQL = `
		CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
		DROP TABLE IF EXISTS teams;

		CREATE TABLE teams(
			code VARCHAR(255),
			fullName VARCHAR(255),
			shortName VARCHAR(255)
			)`;

	await client.query(SQL);
	await addTeams(services.teams);
};

const addTeams = (teams) => {
	teams.map((team) => {
		addTeam(team);
	});
	return;
};

const addTeam = async (team) => {
	const SQL =
		"INSERT INTO teams(code, fullName, shortName) values($1, $2, $3) returning *";
	return (await client.query(SQL, [team.code, team.fullName, team.shortName]))
		.rows[0];
};

module.exports = {
	sync,
};
