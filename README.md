# Proyecto final Frontend
Este es el repositorio backend para el proyecto final de la cerrajería es complentario con https://github.com/Cristian0813/Proyecto_final_frontend.git. Este proyecto fue desarrollado utilizando Node.js, Express y MongoDB para proporcionar servicios de backend, incluido el envío de correos electrónicos.

*_Estos son solo ejemplos básicos, ajusta y amplía según las necesidades específicas de tu proyecto._**

### Requisitos
Asegúrate de tener Node.js y npm instalados en tu máquina.

[Node.js](https://nodejs.org/en)
<br>
[npm](https://www.npmjs.com/) **(Normalmente viene con Node.js)**

### Instalación
1. Clona este repositorio:
    ```fish
    git clone https://github.com/Cristian0813/Proyecto_final_backend.git
    ```
1. Navega al directorio del proyecto:
    ```ruby
    cd Proyecto_final_backend
    ```
1. Instala las dependencias:
    ```
    npm install
    ```

## Configuración del entorno
Crea un archivo **_.env_** en el directorio raíz y proporciona las siguientes variables de entorno:

```
PORT=tu_puerto
MONGODB_URL=tu_url_de_mongodb
EMAIL_SERVICE=gmail
EMAIL_USER=tu_correo_gmail@gmail.com
EMAIL_PASSWORD=tu_contraseña_gmail
```
Asegúrate de reemplazar **_tu_puerto_**, **_tu_url_de_mongodb_**, **_tu_correo_gmail@gmail.com_** y **_tu_contraseña_gmail_** con la configuración adecuada.

## Ejecutar la aplicación
Una vez que todas las dependencias están instaladas, puedes ejecutar la aplicación:
```
npm start
```
```
npn run dev
```

Esto iniciará el servidor backend en el puerto especificado en tu archivo **_.env_**

## Estructura del Proyecto
La estructura del proyecto sigue una arquitectura modular:

- **_/routes:_** Contiene las rutas de la API.
- **_/models:_** Define los modelos de datos de MongoDB.
- **_/middleware:_** Contiene funciones de middleware.
- **_/utils:_** Incluye utilidades y funciones comunes.
- **_/public:_** Carpeta estática para archivos públicos.

## Configuración de CORS
La aplicación está configurada para permitir cualquier origen **(*)**. Esto se puede ajustar según las necesidades específicas.

```ruby
// Configuración de CORS para permitir cualquier origen
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
```

### Envío de Correos Electrónicos
El backend utiliza el paquete nodemailer para enviar correos electrónicos. Asegúrate de proporcionar la configuración adecuada en tu archivo .env.

```ruby
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
```
### Dependencias
- [axios](https://www.npmjs.com/package/axios)
- [body-parser](https://www.npmjs.com/package/body-parser)  
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors)
- [dontenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [http-errors](https://www.npmjs.com/package/http-errors)
- [jade](https://www.npmjs.com/package/jade)
- [knex](https://www.npmjs.com/package/knex)
- [mongoDb](https://www.npmjs.com/package/mongodb)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [morgan](https://www.npmjs.com/package/morgan)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [pg](https://www.npmjs.com/package/pg)

## Contribuir
Si deseas contribuir a este proyecto, por favor...

1. Haz un fork del proyecto.
1. Crea una nueva rama **(git checkout -b feature/nueva-funcionalidad)**
1. Realiza tus cambios y haz commit **(git commit -m 'Agrega nueva funcionalidad')**
1. Haz push a la rama **(git push origin feature/nueva-funcionalidad)**
1. Abre un Pull Request

## Authors

- [@Cristian Arias](https://www.github.com/Cristian0813)

## License

[MIT](https://github.com/Cristian0813/Proyecto_final_backend/blob/main/LICENSE)