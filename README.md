##Requisitos del Proveedor de Hosting
Para desplegar tu proyecto de radio online en tiempo real, necesitarás un proveedor que cumpla con los siguientes requisitos:

Node.js Support: El proveedor debe soportar aplicaciones Node.js.
Storage and Bandwidth: Debe ofrecer suficiente almacenamiento y ancho de banda para manejar tus archivos de música y la transmisión en vivo.
Icecast: Debe permitir la instalación y ejecución de Icecast para el streaming.
Custom Domain: Es beneficioso si el proveedor permite usar un dominio personalizado.
SSL/TLS: Soporte para SSL/TLS para transmitir de manera segura.
Port Management: Debe permitir la apertura y gestión de puertos para la transmisión en vivo.

##Para instalar tu proyecto Node.js en otro computador, necesitarás seguir estos pasos:

Instalar Node.js y npm:

Asegúrate de tener Node.js y npm (Node Package Manager) instalados en el nuevo computador. Puedes descargarlos desde Node.js.
Clonar el repositorio:

Clona el repositorio de tu proyecto desde GitHub (o cualquier otra plataforma de control de versiones que uses).

##Instalar las dependencias:

Navega a la carpeta de tu proyecto y ejecuta el siguiente comando para instalar todas las dependencias listadas en el archivo package.json.

cd tu-proyecto
npm install

##Configurar variables de entorno (si es necesario):

Si tu proyecto usa variables de entorno, asegúrate de crear un archivo .env en la raíz del proyecto con las variables necesarias. Puedes proporcionar un archivo de ejemplo llamado .env.example en tu repositorio para facilitar esta tarea.
Ejecutar el proyecto:

Dependiendo de cómo esté configurado tu proyecto, puede que necesites ejecutar uno de estos comandos para iniciar el servidor:

##npm start


----

mkdir radio-station
cd radio-station
npm init -y


npm install express
npm install fluent-ffmpeg
npm install ws

node server.js


Abre tu navegador y visita http://localhost:8000
