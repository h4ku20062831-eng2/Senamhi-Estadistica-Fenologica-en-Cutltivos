# 🌱 Proyecto de Meteorologico de Senamhi

Este proyecto utiliza NestJS con TypeORM para la gestión de cultivos y sus fases fenológicas.

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- PostgreSQL instalado y en ejecución
- npm o yarn

## 🚀 Configuración Inicial

### 1. Instalación de Dependencias

Primero, instala las dependencias base del proyecto:

```bash
npm install
```

### 2. Instalación de Paquetes Necesarios

Instala los siguientes paquetes requeridos para el funcionamiento del proyecto:

```bash
npm install class-validator typeorm @nestjs/typeorm pg
```

**Paquetes instalados:**
- `class-validator` - Validación de datos en los DTOs
- `typeorm` - ORM para la gestión de base de datos
- `@nestjs/typeorm` - Integración de TypeORM con NestJS
- `pg` - Driver de PostgreSQL para Node.js

### 3. Configuración de la Base de Datos

Debes crear el archivo `app.module.ts` en la carpeta `src/` con la configuración de tu base de datos.

#### 📝 Plantilla de `app.module.ts`

Copia y pega el siguiente código en `src/app.module.ts` y **reemplaza los valores** con tus credenciales de base de datos:

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cultivo } from './cultivo/entity/cultivo.entity';
import { FaseFenologica } from './cultivo/entity/fase-fenologica.entity';
import { CultivoFase } from './cultivo/entity/cultivo-fase.entity';
import { CultivoRegistro } from './cultivo/entity/cultivo-registro.entity';
import { CultivoModule } from './cultivo/cultivo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',                    // 👈 Cambia esto si tu DB está en otro servidor
      port: 5432,                           // 👈 Cambia esto si usas otro puerto
      username: '....',                     // 👈 REEMPLAZA con tu usuario de PostgreSQL
      password: '....',                     // 👈 REEMPLAZA con tu contraseña de PostgreSQL
      database: '....',                  // 👈 REEMPLAZA con el nombre de tu base de datos
      entities: [Cultivo, FaseFenologica, CultivoFase, CultivoRegistro],
      synchronize: true,                    // ⚠️ ACTIVAR SOLO EN DESARROLLO
    }),

    CultivoModule,

  ],

})
export class AppModule { }
```

#### ⚙️ Variables a Configurar

Asegúrate de modificar las siguientes variables según tu configuración:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `host` | Dirección del servidor de PostgreSQL | `'localhost'` o `'192.168.1.100'` |
| `port` | Puerto de PostgreSQL | `5432` (por defecto) |
| `username` | Usuario de la base de datos | `'tu_usuario'` |
| `password` | Contraseña del usuario | `'tu_contraseña'` |
| `database` | Nombre de la base de datos | `'nombre_de_tu_db'` |

### ⚠️ Importante

- **`synchronize: true`** solo debe estar activado en **desarrollo**. Esta opción sincroniza automáticamente el esquema de la base de datos con tus entidades.
- En **producción**, establece `synchronize: false` y usa migraciones para gestionar cambios en la base de datos.

## 🏃 Ejecutar el Proyecto

### Modo Desarrollo

```bash
npm run start:dev
```

### Modo Producción

```bash
npm run build
npm run start:prod
```

## 📦 Estructura del Proyecto

```
src/
├── app.module.ts          # 👈 Archivo principal de configuración (CREAR ESTE ARCHIVO)
├── app.controller.ts
├── app.service.ts
└── cultivo/
    ├── cultivo.module.ts
    └── entity/
        ├── cultivo.entity.ts
        ├── fase-fenologica.entity.ts
        ├── cultivo-fase.entity.ts
        └── cultivo-registro.entity.ts
```

## 🔒 Seguridad

**Nunca subas tu archivo `app.module.ts` con credenciales reales a un repositorio público.**

Considera usar variables de entorno para la configuración sensible:

```bash
# Ejemplo con variables de entorno
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=tu_base_de_datos
```

## 📚 Recursos

- [Documentación de NestJS](https://docs.nestjs.com/)
- [Documentación de TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/docs/)

## 🤝 Soporte

Si tienes problemas con la configuración, verifica que:

1. PostgreSQL esté corriendo
2. Las credenciales sean correctas
3. La base de datos exista
4. El usuario tenga permisos suficientes

---

**¡Listo para comenzar a desarrollar! 🎉**