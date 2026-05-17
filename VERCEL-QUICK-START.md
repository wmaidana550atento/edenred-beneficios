# 🚀 DESPLIEGUE EN VERCEL - PASOS RÁPIDOS

## ⚡ RESUMEN (3 PASOS PRINCIPALES)

```
1️⃣ GitHub          2️⃣ Vercel           3️⃣ ¡PUBLICADO!
   (5 min)           (3 min)             (30 seg)
   
   Crear repo    →   Importar repo   →   ✓ URL pública
   Push código       Click Deploy         ✓ HTTPS
```

---

## 📝 PASO 1: CREAR REPOSITORIO EN GITHUB

```
1. Ir a: https://github.com/new
2. Nombre: edenred-beneficios
3. Visibilidad: Public
4. Click "Create repository"
```

---

## 🔗 PASO 2: SUBIR CÓDIGO A GITHUB

En VS Code Terminal (PowerShell), ejecutar:

```powershell
git remote add origin https://github.com/TU-USUARIO/edenred-beneficios.git
git branch -M main
git push -u origin main
```

**Reemplazar `TU-USUARIO` con tu nombre de GitHub**

**Esperar a que termine (2-5 segundos)**

---

## 🌐 PASO 3: DESPLEGAR EN VERCEL

```
1. Ir a: https://vercel.com/dashboard
2. Click: "Add New" → "Project"
3. Buscar: "edenred-beneficios"
4. Seleccionar tu repositorio
5. Click: "Import"
6. Click: "Deploy"
7. Esperar 30-60 segundos
```

**¡LISTO! Tu URL será:**
```
https://edenred-beneficios.vercel.app
```

---

## 📱 YA ESTÁ DISPONIBLE

Tu aplicación está pública en:
```
🌐 https://edenred-beneficios.vercel.app
```

✅ Puedes acceder desde:
- Tu móvil
- Otra PC
- Cualquier dispositivo con navegador
- Compartir el link

---

## 🔄 ACTUALIZAR DESPUÉS

Cada cambio que hagas en el código:

```powershell
git add .
git commit -m "Tu mensaje"
git push origin main
```

Vercel redesplegará **automáticamente en 30 segundos** ⚡

---

## 📋 INFORMACIÓN ÚTIL

| Elemento | Detalles |
|----------|----------|
| **Build** | ~3 segundos |
| **Deploy** | ~30 segundos |
| **HTTPS** | ✅ Automático |
| **Dominio** | Subdominio vercel.app gratis |
| **Actualizaciones** | Automáticas desde GitHub |

---

## ❓ PREGUNTAS COMUNES

### ¿Cuánto cuesta?
**Gratis.** Vercel ofrece plan gratuito muy completo.

### ¿Mi código es privado?
Debes hacer el repositorio **Public** en GitHub para que Vercel pueda acceder.

### ¿Cómo veo errores?
En Vercel Dashboard → Project → Deployments → Click en deploy fallido

### ¿Puedo usar mi propio dominio?
Sí, en Project Settings → Domains → Agregar tu dominio

---

## ✅ CHECKLIST

- [ ] Repositorio GitHub creado
- [ ] Código pusheado a GitHub
- [ ] Cuenta Vercel creada
- [ ] Proyecto importado en Vercel
- [ ] Deploy completado
- [ ] URL funcionando

---

**¿Necesitas ayuda?** Ver [VERCEL-DEPLOYMENT.md](VERCEL-DEPLOYMENT.md) para guía detallada.
