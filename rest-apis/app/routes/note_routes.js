module.exports = function(app, db) {
	
	var collection_name = 'notes'
	var ObjectID = require('mongodb').ObjectID;

	app.post('/notes', function(req, res) {

		var note = {title: req.body.title, body: req.body.body};
		db.collection(collection_name).insert(note, function(err, result) {

			if (err)
			{
				res.send({'error': 'An error Occured', 'message': err});
			}
			else
			{

				res.send(result.ops[0]);
			}
		});
	});

	app.get('/notes/:id', function(req, res) {

		var id = req.params.id;
		db.collection(collection_name).findOne({'_id': new ObjectID(id)}, function(err, item) {

			if (err)
			{
				res.send({'error': 'An error occured'});
			}
			else if (item)
			{
				res.send(item);
			}
			else 
			{
				res.send({'message': 'item does not exists'});
			}
		});

	});

	app.delete('/notes/:id', function(req, res) {

		const details = ({'_id': new ObjectID(req.params.id)});
		db.collection('notes').remove(details, function(err, item) {

			if (err)
			{
				res.send({'error': 'An error Occured'});
			}
			else
			{
				res.send({'message': 'Record with ' + req.params.id + ' deleted' });
			}
		});
	});

	app.get("/allNotes", function(req, res) {

		db.collection("notes").find({}).toArray(function(err, docs) {
		  	if (err)
		  	{
		  		res.send({'error': 'An error Occured'});
		  	}
		  	res.status(200).json({'notes' : docs});
		  	// else if (docs)
		  	// {
		  	// 	docs.each(function(err, doc) {

		  	// 		console.log(doc.toObject());

		  	// 	});
		  	// }
	    });
	});

};