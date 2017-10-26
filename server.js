import app from './index'

app.listen(app.get('port'), () => {
  console.log(`app is running ${app.get('port')}`)
})
