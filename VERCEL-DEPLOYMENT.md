# 🚀 DESPLIEGUE EN VERCEL - GUÍA COMPLETA

## ¿Qué es Vercel?
Vercel es la plataforma creada por los creadores de Next.js y es perfecta para desplegar aplicaciones Vite/React.
- ⚡ Despliegue automático desde GitHub
- 🔒 HTTPS gratis
- 📊 Analytics incluido
- 🌍 CDN global
- 💰 Versión gratuita muy completa

---

## PASOS PASO A PASO

### 📋 PASO 1: Crear cuenta en Vercel (2 minutos)

1. Ir a https://vercel.com/signup
2. Elegir registrarse con GitHub (recomendado) o email
3. Si usas GitHub: Autorizar acceso a Vercel
4. Verificar tu email

---

### 📋 PASO 2: Subir código a GitHub (5 minutos)

**Ya tienes Git inicializado localmente. Ahora necesitas:**

#### 2A. Crear repositorio en GitHub

1. Ir a https://github.com/new
2. Nombre del repositorio: `edenred-beneficios`
3. Descripción: `Aplicação para visualizar gastos da tarjeta de alimentação Edenred`
4. Seleccionar "Public" (para que Vercel pueda acceder)
5. **NO** inicializar con README (ya lo tienes)
6. Click en "Create repository"

#### 2B. Conectar tu repositorio local con GitHub

En la terminal PowerShell de VS Code, ejecutar:

```powershell
# Agregar remote a GitHub
git remote add origin https://github.com/tu-usuario/edenred-beneficios.git

# Cambiar rama a main (requerido por GitHub)
git branch -M main

# Hacer push del código
git push -u origin main
```

**Reemplazar `tu-usuario` con tu usuario de GitHub**

---

### 📋 PASO 3: Conectar con Vercel (3 minutos)

1. Ir a https://vercel.com/dashboard
2. Click en **"Add New"** → **"Project"**
3. Click en **"Import Git Repository"**
4. En el campo de búsqueda, escribir: `edenred-beneficios`
5. Seleccionar tu repositorio
6. Click en **"Import"**

#### Configuración automática:
Vercel detectará automáticamente:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

**NO CAMBIAR NADA - Click en "Deploy"**

---

### ✨ PASO 4: ¡Listo! Tu app está desplegada

Dentro de **30-60 segundos**, verás:

```
✓ Production
✓ https://edenred-beneficios.vercel.app
```

**Acceso:** https://edenred-beneficios.vercel.app

---

## 📱 DESPUÉS DEL DESPLIEGUE

### Compartir tu app
- URL pública: `https://edenred-beneficios.vercel.app`
- Funciona en móviles, tablets y PC
- HTTPS automático y seguro

### Actualizar la app
Cada vez que hagas cambios:

```powershell
# Hacer cambios en el código
# Luego:
git add .
git commit -m "Descripción del cambio"
git push origin main

# Vercel desplegará automáticamente en 30 segundos ⚡
```

### Ver analytics y logs
1. Ir a https://vercel.com/dashboard
2. Click en tu proyecto
3. Ver datos de despliegues, analytics, edge functions, etc.

---

## 🎨 DOMINIO PERSONALIZADO (Opcional)

Si quieres tu propio dominio (ejemplo: `miapp.com`):

1. Ir a Project Settings → Domains
2. Click en "Add"
3. Escribir tu dominio
4. Seguir instrucciones para configurar DNS
5. En 5-10 minutos: `https://miapp.com` activo

---

## 🔧 TROUBLESHOOTING

### ❌ "Build failed"
```
Solución: Verificar que npm install funcionó correctamente
git push origin main
Vercel reintentará automáticamente
```

### ❌ "npm packages not found"
```
Solución: package.json está correcto, Vercel detectará los cambios
```

### ❌ "No puedo ver mi app"
```
Solución: Esperar 60 segundos, luego actualizar página
Si sigue sin funcionar: ir a Vercel Dashboard y hacer redeployed
```

---

## 📊 VARIABLES DE ENTORNO (Si necesitas en el futuro)

En Vercel Dashboard:

1. Project Settings → Environment Variables
2. Agregar variable (ejemplo):
   ```
   VITE_API_URL = https://api.ejemplo.com
   ```
3. Click "Save"
4. Vercel redesplegará automáticamente

En tu código usar:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## ✅ CHECKLIST FINAL

- [ ] Cuenta en GitHub creada
- [ ] Repositorio `edenred-beneficios` creado en GitHub
- [ ] Código pusheado a GitHub (`git push origin main`)
- [ ] Cuenta en Vercel creada (con GitHub)
- [ ] Proyecto importado en Vercel
- [ ] Deploy completado ✓
- [ ] App accesible en URL pública

---

## 🎉 ¡LISTO!

Tu aplicación Edenred está disponible públicamente en:

### 🌐 https://edenred-beneficios.vercel.app

**Puedes:**
- Compartir el link con cualquiera
- Acceder desde cualquier dispositivo
- Actualizar simplemente haciendo `git push`

---

## 📞 SOPORTE

Si tienes problemas:
1. Ir a https://vercel.com/dashboard
2. Click en tu proyecto → "Deployments"
3. Ver logs del último despliegue
4. Si hay error, leer el mensaje

O consultar: https://vercel.com/docs

---

**¿Necesitas ayuda con algún paso específico?**
