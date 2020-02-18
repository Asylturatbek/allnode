const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger.js')
const members = require('./Members.js')

const app = express();

// Init middleware
app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

//Body Parse MIddleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// Homepage Route
app.get('/', (req, res) => res.render('index', {
	title: 'Member App',
	members
}))

// SEt static folder
app.use(express.static(path.join(__dirname, 'public')))
// Members API routes
app.use('/api/members', require('./routes/api/members.js'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
