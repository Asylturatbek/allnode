// Setup
const express = require('express')
const app = express();
const URI = 'mongodb+srv://admin:asyl00000@cluster0-ple4h.mongodb.net/test?retryWrites=true&w=majority'

const mongoose = require('mongoose')
mongoose.connect(URI, { 
	useUnifiedTopology: true ,
	useNewUrlParser: true
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

app.delete('/delete/:id', async (req, res) => {
	try {
		const removedPost = await Post.remove({_id: req.params.postId})
		res.json(removedPost)
	} catch (err) {
		res.json({message: err})
	}
})

const port = process.env.Port || 5000



// Listen
app.listen(port, () => {
	console.log('Server listening on ' + port )
})