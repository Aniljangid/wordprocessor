const db = require("../util/db");
const hash = require("../util/hash");
const AWS = require('aws-sdk');
const path = require('path');

AWS.config.update({
    accessKeyId: "AKIAIINDIZDYUUTE7QSA",
    secretAccessKey: "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"
  });

let s3 = new AWS.S3();

const create = async (req, res) => {

	const {name, email, password} = req.body;

	let hashedPassword = await hash.generatePasswordHash(password);
	const data = {
		"name" : name,
		"email" : email,
		"password" : hashedPassword
	};

	db.query(`select email from user where email = ?`, email, (err, resp) => {
		if(resp.length){
			return res.status(400).json({
				"message": "user already exists"
			})
		} else{
				db.query(`INSERT INTO user SET ?`, data, (err, resp) =>{

					if(err){
						return res.status(500).json({
							"error": err
						})
					} else {
						return res.status(200).json({
							"message": "succesfully created new user"
						})
					}
				})	
		}
	});	
}




const login = async (req, res) => {

	const {email, password} = req.body;
	db.query(`select * from user where email = ?` , email,async (err, resp) => {
		if(resp.length > 0){
			let hashedPassword = resp[0].password;
			let isValidpassword = await hash.comparePasswordHash(password, hashedPassword);
			if(isValidpassword === true){
				return res.status(200).json({
					"message": "user logged in"
				})
			} else {
				return res.status(402).json({
					"message": "incorrect password"
				})
			}

		} else {
			return res.status(402).json({
				"message": "user does not exists"
			})
		}		
	});
}

module.exports = {
	create,
	login
}