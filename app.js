import express from 'express';
import compression from 'compression';
import chalk from 'chalk';
import react from 'react';
import route from './routes';
import { createEngine} from 'express-react-views';

const app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', createEngine({ beautify: true}));

app.use(compression());

app.get('/', route.index);

app.listen(app.get('port'), () => {
  console.log(`%s Aplicação está rodando em http://localhost:%s em %s}, 
  Pressione CTRL-C se dejesa parar o servidor.`, chalk.green('✓'),app.get('port'), app.get('env'));
});