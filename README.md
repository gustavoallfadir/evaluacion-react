# Evaluación de frontend con React.JS

Evaluación práctica de frontend con React.JS

### Instrucciones:

    1- Crear un proyecto ReactJS con los siguientes elementos en UI.
        • Formulario con campo de texto, email, fecha, dropdown(opciones: soltero, casado, viudo campo bullet.
        • Botón envío, debe validar los campos, deben estar poblados y con datos validos de acuerdo al tipo de input. Después de la validación, agregar los valores a la tabla abajo descrita.
        • Botón de reseteo de formulario.
    2- Crear una tabla que despliegue elementos de un objeto JSON que estará alojado en una URL, se proporcionara dicha URL, y se deben agregar nuevos registros desde el formulario del primer punto.
    3- Se deberá consumir el JSON para la tabla del punto anterior, por medio de una petición GET.
    4- El proyecto deberá ser subido a un repositorio Git.
    5- El proyecto deberá contener el archivo README con las instrucciones necesarias para clonar el proyecto y ejecutarlo para su evaluación.

### Para clonar el repositorio ejecute el siguiente comando en una terminal:
    $ git clone https://github.com/gustavoallfadir/evaluacion-react

### Requisito previo: Node.JS
Para ejecutar el servidor de prueba hace falta tener instalado Node.js; en caso de no tenerlo instalado, descárguelo de: 
    https://nodejs.org/en/download/

#### Para instalar Node.js en Ubunto o Debian puede ejecutar el siguiente comando:
    $ sudo apt install nodejs

### Opcional:
Para instalar Yarn, una vez instalado Node.JS, ejecute el siguiente comando:
    $ npm install --global yarn

#### Para iniciar el servidor de prueba entre a la carpeta del proyecto de esta manera:
    $ cd evaluacion-react

#### Instale las dependencias de Node.JS con el siguiente comando:
    $ npm install

### Para instalar las dependencias con yarn:
    $ yarn install

### Iniciar el servidor:
#### Para iniciar el servidor de pruebas ejecute el siguiente comando:
    $ npm start

#### O en caso de usar yarn:
    $ yarn start

#### El servidor de prueba iniciará y una ventana del explorador por default lo abrirá en la siguiente dirección:
    localhost:3000