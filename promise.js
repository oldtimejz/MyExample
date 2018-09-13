const fs = require('fs');
const path = require('path')

function promise(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path, 'utf-8', function(err, data){
			if(err){
				return reject(err);
			}
			resolve(data);
		})
	});
}

promise(path.join(__dirname, '过渡.html'))
	.then(function(data){
		console.log(data);
	},function(err){
		console.log(err)
	})