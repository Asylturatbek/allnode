var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'asylturatbek@gmail.com',
		pass: 'asyl00000gm'
	}
});

var mailOptions = {
	from: 'asylturatbek@gmail.com',
	to: 'abubakrsalahuddin@gmail.com',
	subject: 'Sending Email using Node.js',
	html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});