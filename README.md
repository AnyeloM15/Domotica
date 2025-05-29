```markdown
# Proyecto de Domótica - Monitoreo de Clima con NestJS + MongoDB

Este proyecto permite monitorear la temperatura y humedad de un espacio en tiempo real, guardar los datos en MongoDB, y controlar remotamente dispositivos como ventiladores o aires acondicionados desde una aplicación móvil (React Native o web).

---

## Tecnologías utilizadas

- **NestJS** (framework backend)
- **MongoDB** (base de datos NoSQL)
- **Mongoose** (ODM para MongoDB en NestJS)
- **ESP32** (dispositivo que envía datos desde sensor DHT22)
- **React Native** (interfaz de usuario móvil)
- **HTTPClient / WiFiClient** (para envío desde ESP32)

---

## Estructura actual
```

src/
├── clima/
│ ├── clima.module.ts
│ ├── clima.controller.ts
│ ├── clima.service.ts
│ ├── dto/
│ │ └── create-clima.dto.ts
│ └── schemas/
│ └── clima.schema.ts

````

---

## Instalación del backend

1. Clona este repositorio:
```bash
git clone <url-del-nuevo-repo>
cd nestjs-clima-mongoose
````

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz con tu cadena de conexión:

```env
MONGODB_URI=mongodb://localhost:27017/domotica
# o MongoDB Atlas:
# MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/domotica
```

4. Inicia el servidor:

```bash
npm run start:dev
```

---

## Endpoints disponibles

- `POST /clima`: recibe datos `{ temperatura, humedad, ubicacion }`
- `GET /clima/ultima`: obtiene la última lectura registrada
- `GET /clima/historial`: obtiene las 100 lecturas más recientes

---

## Seguridad y buenas prácticas

- Usa variables de entorno (`.env`) para proteger tu URI de MongoDB.
- Asegúrate de añadir `.env` al archivo `.gitignore`.

---

## Próximos módulos sugeridos

- `control/`: encendido/apagado remoto de ventiladores vía relé.
- `alertas/`: gestión de alertas por sobretemperatura.

---

## Autor

MIGUEL ANGEL GARCIA ESPINOSA
OMAR TORRIJOS PEREZ
EMILIO MORENO ALMANZA
