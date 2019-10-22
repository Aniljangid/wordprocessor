const db = require("../util/db");
const AWS = require('aws-sdk');
const path = require('path');
const ab2str = require('arraybuffer-to-string');

AWS.config.update({
    accessKeyId: process.env.ACCKEYID,
    secretAccessKey: process.env.ACCKEYSEC,
    Bucket: process.env.BUCKET,
  });

let s3 = new AWS.S3();

const write = async (req, res) => {
	const { fileName, content, userId} = req.body

	const data = {
		"fileName": fileName,
		"content" : content,
		"user_id" : userId
	};

	db.query(`select * from files where file_name = ? and user_id = ?`, [fileName, userId], (err, resp) => {
	console.log(resp);
		if(resp.length){
			return res.status(400).json({
				"message": "file already exists"
			})
		} else {
			let params = {
			  Bucket: 'wordprocessor',
			  Body : content,
			  Key : userId + "/" + fileName
			};

			s3.upload(params, function (err, data) {
			  
			  if (err) {
			  	console.log(err);
			    return res.status(500).json({
					"error": "error while creating file"
				})
			  } else {
			  	db.query(`INSERT INTO files (user_id, link, file_name, created_at, updated_at) values (?, ?, ?, ?, ?)`, [userId, data.Location, fileName, new Date(), new Date()], (err, resp) => {
			  		if(err){
			  			console.log(err)
			  			return res.status(500).json({
						"error": "error while inserting fle in db"
						})
			  		} else {
			  			return res.status(200).json({
							"message": "succesfully uploaded file"
						})
			  		}
			  	})
			  }
			});
		}
	})
}			



const updateFile = async (req, res) => {
	const { fileName, content, userId, fileId} = req.body

	const data = {
		"fileName": fileName,
		"content" : content,
		"user_id" : userId,
		"file_id" :fileId
	};

	db.query(`select * from files where file_name = ? and user_id = ?`, [fileName, userId], (err, resp) => {
		let params = {
		  Bucket: 'wordprocessor',
		  Body : content,
		  Key : userId + "/" + fileName
		};

		s3.upload(params, function (err, data) {
		  
		  if (err) {
		  	console.log(err);
		    return res.status(500).json({
				"error": "error while updating file"
			})
		  } else {
		  	db.query(`UPDATE files SET updated_at = ? where id = ?`,[new Date(), fileId],(err, resp) => {
		  		if(err){
		  			console.log(err)
		  			return res.status(500).json({
					"error": "error while updating fle in db"
					})
		  		} else {
		  			return res.status(200).json({
						"message": "succesfully updated file"
					})
		  		}
		  	})
		  }
		});
	})
}			


const read = async (req, res) => {
	const { userId, fileName } = req.body

	const params = {
		Bucket: "wordprocessor",
		Key : userId + "/" + fileName
	};

	s3.getObject(params, function (err, resp) {
		if (!err) {
			buffer = resp.Body;
			return res.status(200).json({
				"message": "Succesfully read file",
				"data": buffer.toString()
	  		});
		} else {
			return res.status(500).json({
				"message": err
			})
		}
	});
}


const deleteFile = async (req, res) => {
	const { fileName, userId } = req.body
	const params = {
		Bucket: "wordprocessor",
		Key : userId + "/" + fileName
	};

	s3.deleteObject(params, function (err, data) {
		db.query(`DELETE FROM files WHERE file_name = ? and user_id`, [fileName, userId], (err, resp) =>{
			if (!err) {
				return res.status(200).json({
					"message": "Succesfully deleted file",
		  		});
			} else {
				return res.status(500).json({
					"message": err
				})
			}
		})
	});
}


const getAllFiles = async (req, res) => {
	const {userId} = req.query

	db.query(`SELECT * FROM files WHERE user_id = ?`, userId, (err,data) => {
		if(err){
			return res.status(500).json({
				"message": err
			});
		} else {
			return res.status(200).json({
				"data": data
			})
		}

	});
	
}




module.exports = {
	write,
	read,
	updateFile,
	deleteFile,
	getAllFiles
}
