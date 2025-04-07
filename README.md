# 📝 UpTask - Gestor de Proyectos

Aplicación web para gestión de proyectos y tareas, desarrollada como proyecto de práctica para mi portfolio. Permite registrar usuarios, crear proyectos, agregar colaboradores y administrar tareas.

## 🚀 Tecnologías utilizadas

- **Frontend:** React, Tailwind CSS, Axios, React Router DOM, TypeScript
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, TypeScript
- **Autenticación:** JWT + Cookies
- **Recuperación de contraseña:** con Mailtrap (solo en entorno de desarrollo)

## 🌐 Deploy

- **Frontend (Vercel):** [https://up-task-frontend-psi-eight.vercel.app/](https://up-task-frontend-psi-eight.vercel.app/)
- **Backend API:** desplegado en Render, consumido internamente por el frontend

> ⚠️ El backend puede tardar unos segundos en iniciar debido al plan gratuito de Render.
> ⚠️ La funcionalidad de recuperación de contraseña no funciona en producción ya que utiliza Mailtrap (servicio de testing de emails).

## 🧪 Funcionalidades principales

- Registro e inicio de sesión
- Confirmación de cuenta vía email (simulada)
- Creación y edición de proyectos
- Gestión de tareas por proyecto
- Asignación de colaboradores
- Protección de rutas privadas

## 👤 Cuentas de prueba

> Como el sistema de confirmación de cuenta está desactivado (por estar basado en Mailtrap), podés usar estas cuentas para probar la app:

### 🧑 Usuario normal
- **Email:** correo1@gmail.com  
- **Contraseña:** password

### 👨‍💼 Usuario con proyectos (manager)
- **Email:** correo2@gmail.com  
- **Contraseña:** password

---

## 📁 Repositorios

- [Repositorio Backend](https://github.com/Facu201202/UpTask_backend)
- [Repositorio Frontend](https://github.com/Facu201202/UpTask_frontend)
