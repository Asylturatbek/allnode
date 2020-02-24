// Setup
const express = require('express')
const app = express();
const URI = 'mongodb+srv://admin:asyl00000@cluster0-ple4h.mongodb.net/test?retryWrites=true&w=majority'

const port = process.env.PORT || 5000

const mongoose = require('mongoose')
mongoose.connect(URI, { 
	useUnifiedTopology: true ,
	useNewUrlParser: true,
	useFindAndModify: false
})
mongoose.connection.on('connected', () => {
	console.log('Mongoose is connected')
})

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
})
var Post = mongoose.model('Post', postSchema)

app.get('/', (req, res) => {
	Post.find({}, (err, posts) => {
		res.render('index', { posts: posts})
	})
})

app.post('/addpost', (req, res) => {
    var postData = new Post(req.body);
    postData.save().then( result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});

app.get('/delete', (req, res) => {
	const query = req.query
	Post.findByIdAndRemove(query.id)
	.then( data => {
		res.redirect('/')
	})
	.catch( err => {
		res.json({
			confirmation: 'failed',
			message: 'something went wrong'
		})
	})
})

app.get('/update', (req, res) => {
	const query = req.query
	const profileId = query.id
	delete query['id']
	const dateIsNull = query.date == "";
	const titleIsNull = query.title == ""
	const bodyIsNull = query.body == "";
	if(dateIsNull) {
		delete query['date']
	}
	if(titleIsNull) {
		delete query['title']
	}
	if(bodyIsNull) {
		delete query['body']
	}

	Post.findByIdAndUpdate(profileId, query, {new:true})
	.then(profile => {
		res.redirect('/')
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'there is something wrong with updating'
		})
	})
} )




// Listen
app.listen(port, () => {
	console.log('Server listening on ' + port )
})