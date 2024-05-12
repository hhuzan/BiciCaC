# Bici Cac

## Trabajo Práctico Final del Curso de React en Codo-a-Codo 4.0

Aplicación para visualizar en tiempo real el estado de las de [Estaciones Ecobici](https://baecobici.com.ar/) **favoritas** del usuario.

### Instalacion "Local"

-   Copiar el archivo `.env` a `env.local`
-   Agregar las keys en el archivo `env.local`
-   `npm install`
-   `npm run dev`

### Desarrollado con:

-   [React](https://react.dev/)
-   [Firebase Authentication](https://firebase.google.com/docs/auth)
-   [Firebase Realtime Database](https://firebase.google.com/docs/database)

### API

-   [API Transporte](https://api-transporte.buenosaires.gob.ar/) BA Ciudad

### Deploy

-   [Vercel](https://vercel.com/)

---

Para evitar errorers de CORS, en modo development local, el acceso a la api se hace mediante un PROXY configurado en `vite.config.js`

El deploy en Vercel utiliza un backend mínimo que hace de gateway a las APIs del gobierno de la Ciudad.

---

![Pantalla de  Login](images/1.png)
![Pantalla Principal](images/2.png)
![Pantalla de  Lonfiguración](images/3.png)
