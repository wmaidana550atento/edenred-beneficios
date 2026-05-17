# 🚀 Guía de Despliegue - Aplicación Edenred

## Opción 1: Vercel (Recomendado - MÁS RÁPIDO)

### Pasos:

1. **Crear cuenta en Vercel** (si no la tienes)
   - Ir a https://vercel.com
   - Registrarse con GitHub, GitLab o email

2. **Conectar tu repositorio**
   - Hacer push de este proyecto a GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Edenred Beneficios App"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

3. **Importar proyecto en Vercel**
   - Ir a https://vercel.com/dashboard
   - Click en "Add New" → "Project"
   - Seleccionar tu repositorio
   - Vercel detectará automáticamente que es Vite
   - Click en "Deploy"

4. **Tu aplicación estará disponible en:**
   ```
   https://edenred-beneficios.vercel.app
   ```

---

## Opción 2: Netlify (Alternativa)

### Pasos:

1. **Crear cuenta en Netlify** (si no la tienes)
   - Ir a https://netlify.com
   - Registrarse con GitHub o email

2. **Conectar tu repositorio (igual que Vercel)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

3. **Importar en Netlify**
   - Ir a https://app.netlify.com
   - Click en "Add new site" → "Import an existing project"
   - Conectar GitHub y seleccionar tu repo
   - Configuración automática para Vite
   - Click en "Deploy site"

4. **Tu aplicación estará disponible en:**
   ```
   https://edenred-beneficios.netlify.app
   ```

---

## Opción 3: Despliegue Local en tu Red

Si prefieres probar localmente primero:

1. **Hacer build de la aplicación**
   ```bash
   npm run build
   ```
   Esto genera la carpeta `dist/` con los archivos optimizados.

2. **Servir localmente** (requiere instalar un servidor)
   ```bash
   npm install -g http-server
   cd dist
   http-server -p 8080
   ```

3. **Acceder desde:**
   - Tu máquina: `http://localhost:8080`
   - Desde otra máquina en la red: `http://192.168.X.X:8080` (reemplazar con tu IP)

---

## Pasos Rápidos Resumen

### Para Vercel:
```bash
# 1. Inicializar git
git init
git add .
git commit -m "Edenred App"

# 2. Conectar a GitHub y hacer push
# 3. Ir a Vercel.com → Importar proyecto
# 4. ¡Listo!
```

### Para Netlify:
```bash
# Mismos pasos que Vercel
# Pero ir a Netlify.com en lugar de Vercel.com
```

### Para Local:
```bash
npm run build
npx serve dist
# O abre http://localhost:3000
```

---

## Configuración de Variables de Entorno (Si necesario)

Si en el futuro necesitas variables de entorno:

1. Crear archivo `.env`
   ```
   VITE_API_URL=https://api.ejemplo.com
   VITE_APP_NAME=Edenred
   ```

2. En el código usar:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. En Vercel/Netlify:
   - Ir a Settings → Environment Variables
   - Agregar tus variables

---

## Dominios Personalizados

Una vez desplegado, puedes agregar tu propio dominio:

### En Vercel:
- Project Settings → Domains
- Agregar tu dominio personalizado

### En Netlify:
- Site Settings → Domain Management
- Agregar tu dominio personalizado

---

## Monitoreo y Estadísticas

- **Vercel**: Panel automático con analytics
- **Netlify**: Dashboard con estadísticas de despliegue

---

## Próximos Pasos Sugeridos

1. ✅ Hacer build local y probar
2. ✅ Inicializar repositorio Git
3. ✅ Subir a GitHub
4. ✅ Conectar con Vercel o Netlify
5. ✅ Compartir URL pública

---

**¿Necesitas ayuda con algún paso específico?**
