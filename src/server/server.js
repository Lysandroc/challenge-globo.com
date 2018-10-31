import express from 'express';
import compression from 'compression';
import chalk from 'chalk';
import path from 'path';

const app = express();
  
app.set('port', process.env.PORT || 3001);

app.use(express.static('dist'));

app.use(compression());
app.disable('etag');

app.listen(app.get('port'), () => {
  console.log('%s Aplicação está rodando em http://localhost:%s em %s', chalk.green('✓'),app.get('port'), app.get('env'));
});