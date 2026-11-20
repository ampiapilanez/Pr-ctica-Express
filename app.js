
//crear un objeto express de la clase express
import router from './routes.js';
import 'deten'

const app = express();

//donde se despliega 

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', router);

//poner a la app a la escucha de un puerto y especificarf el puerto 
app.listen(port, () => {
    console.log('Servidor en puerto', port);
});