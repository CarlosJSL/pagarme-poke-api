import app from './index'

app.listen(app.get('port'), function () {
	console.log(`app is running ${app.get('port')}`);
});