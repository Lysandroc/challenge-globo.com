import express from 'express';
import session from 'express-session';
import compression from 'compression';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import graphqlHTTP from 'express-graphql';
import routes from './restful/routes';
import graphqlSchema from './graphql';

const Store = connectMongo(session);
const app = express();
const router = express.Router();

dotenv.load({ path: '.env.development' });

app.set('port', process.env.PORT);

routes(router);
app.disable('etag');
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(compression());
app.use(session({
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  resave: true,
  cookie: { maxAge: 1209600000 },
  store: new Store({
    url: process.env.MONGODB_URI,
    autoReconnect: true,
  })
}));

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('Certifique-se se o Mongo está sendo executado.');
  process.exit();
});

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true
}));
app.use('/api', router);

app.listen(app.get('port'), () => {
  console.log('%s Aplicação está rodando em http://localhost:%s ☕', chalk.green('✓'), app.get('port'), app.get('env'));
});
