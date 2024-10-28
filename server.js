import config from './config/config.js'; 
import app from './server/express.js'; 
import mongoose from 'mongoose'; 

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri, {
  useUnifiedTopology: true, 
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error(`Unable to connect to database: ${config.mongoUri}`);
    console.error(`Error details: ${err}`);
  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to portfolio application." });
});


app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('Server started on port %s.', config.port);
});

