# Prueba técnica

Para el desarrollo de la prueba sedecidió utilizar Springboot en la parte del backend, creando un servicio web con JPA y una base de datos Oracle.

# Para comenzar
## Instalar el servidor
 - Instalar base de datos Oracle desde [Oracle] y configurarla
 - Instalar Maven siguiendo estos pasos [Instalar Maven]
 - Clonar el repositorio y dirigirse al directorio backend
 ```sh
$ git clone https://github.com/mateoc15/PruebaTecnica-Drai
$ cd PruebaTecnica-Drai/backend
```
 - Abrir el editor y acceder al archivo application.properties ubicado en src/main/resourses. Aqui se debe reemplazar código y reemplazar el nombre y la contraseña de la base de datos creada en el paso anterior  (
> spring.datasource.username=system
>spring.datasource.password=cambiarcontraseña

- Ejecutar la aplicación
 ```sh
$ mvn clean package && mvn spring-boot:run
```

## Ejecutar la aplicación
Ahora vamos al directorio App de la raiz y ejecutamos las siguientes lineas en la terminal:
 ```sh
$ npm install
$ ng serve
```
   [Oracle]: <https://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/index.html>
   [Instalar Maven]: <https://www.mkyong.com/maven/how-to-install-maven-in-windows/>
   nn/dillinger/tree/master/plugins/onedrive/README.md>


### Anexos
- La base de datos tiene el siguiente esquema
![enter image description here](https://raw.githubusercontent.com/mateoc15/PruebaTecnica-Drai/master/img/1.png)
- los scripts se pueden encontrar en el directorio del backend
