const mysql = require("mysql");

let education; // schools, degrees
let expertise; // skills
let designs; // svg datas

exports.initialize = function () {
	return new Promise((resolve, reject) => {
		try {
			education = mysql.createConnection({
				host: 'localhost',
				user: process.env.DB_USER,
				password: process.env.DB_PSWD,
				database: 'education'
			});
			expertise = mysql.createConnection({
				host: 'localhost',
				user: process.env.DB_USER,
				password: process.env.DB_PSWD,
				database: 'expertise'
			});

			designs = mysql.createConnection({
				host: 'localhost',
				user: process.env.DB_USER,
				password: process.env.DB_PSWD,
				database: 'designs'
			});

			education.connect();
			expertise.connect();
			designs.connect();

			resolve();

		} catch (err) {
			reject(err);
		}
	});
};

exports.getSchoolByID = function (id) {
	return new Promise((resolve, reject) => {
		try {
			education.query("select * from schools where school_id = " + id, (err, res, fields) => {
				if (err) throw err;
				resolve(JSON.stringify(res));
			})
		} catch (err) {
			reject(err);
		}
	});
}

exports.getCoursesByDegree = function (degreeID) {
	return new Promise((resolve, reject) => {
		try {
			education.query(
				"select education.courses.* from education.degrees inner join education.courses on education.degrees.degree_id = education.courses.degree_id where education.degrees.degree_id = " + degreeID,
				(err, res, fields) => {
					if (err) throw err;
					resolve(JSON.stringify(res));
				})
		} catch (err) {
			reject(err);
		}
	});
}

exports.getDegrees = function () {
	return new Promise((resolve, reject) => {
		try {
			education.query("select * from degrees", (err, res, fields) => {
				if (err) throw err;
				resolve(JSON.stringify(res));
			});
		} catch (err) {
			reject(err);
		}
	});
}

exports.getSkillCategory = function () {
	return new Promise((resolve, reject) => {
		try {
			expertise.query("select * from expertise.category order by expertise.category.name",
				(err, res, fields) => {
					if (err) throw err;
					resolve(JSON.stringify(res));
				});
		} catch (err) {
			reject(err);
		}
	});
}

exports.getSkills = function (category_id) {
	return new Promise((resolve, reject) => {
		try {
			expertise.query("select * from expertise.skills where expertise.skills.cat_id = '" + category_id + "' order by expertise.skills.name",
				(err, res, fields) => {
					if (err) throw err;
					resolve(JSON.stringify(res));
				});
		} catch (err) {
			reject(err);
		}
	});
}

exports.getScribble = function (id) {
	return new Promise((resolve, reject) => {
		try {
			designs.query("select * from designs.svgs where designs.svgs.svg_id = '" + (parseInt(id) + 1) + "'",
				(err, res, fields) => {
					if (err) throw err;
					resolve(JSON.stringify(res));
				});
		} catch (err) {
			reject(err);
		}
	});
}


