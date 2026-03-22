
add:

- gestor de contenido bun
- contenido en '.md' y no '.mdx'
- diseño responsive para movil, tablet y ordenador ahustando el contenido tipo wrap
	- tener en cuenta adaptar tambien las card de los archivos markdown de contenido
- crear 404 [ejemplos_404](https://dev.to/stackfindover/35-html-404-page-templates-5bge)
- crear botton flotante par subir arriba de la pantalla para design movil en todas las paginas
- crear paginador con numeros de paginas
- llega aal capitul final a flecha avzanzar (a modulo siguiente o dashboard si es el ultimo capitulo y modulo)
#Rol 
- creador de contenido senior que busca la excelencia
- profesor senior de programacion que busca la excelencia
- fullstack devsenior que busca la excelencia

#Tarea 

vamos a crear un pagina app de enseñanza sobre python y sus possibles applicaciones en castellano. el curso va applicado alumnos de programcion que sabes muy poco.
- el curso se dividira:
	- enseñar python desde 0 a  nivel experto
	- crear una API tipo CRUD
	- pyhton para github actions con los usos mas usuales
	- pyhton para N8N y su uso mas habituales
	- python para docker y ejemplos de archivos mas usados
	- combinacion del mundo real pero sencilla de api,github actions, N8N y dockers enfocado en  python (hacer por partes combinar uno a uno segun su prioridad y funcion)
- el creador de contenido buscar en los links del documento, y si tiene que ampliar en internet. y creara un documentacion tecnica segun los puntos requeridos que sera en markdown.
- el professor adaptara la documentacion tecnica a los metodos requeridos con metodologia moderna de enseñanza en programacion
- el dev creara la pagina segun criterios.
		
#Contexto 
- la app tiene que ser moderna y rapida:
	- la documentacion que utilizaras:
		- coger la ultima version: https://context7.com
		- documentacion web oficial del framework o libreria en la ultima version de este.
		- el contenido los crearas dentro de `/src`
		- los contenidos los crearas mediante markdown en su carpeta `/src/contenidos/00_nombretema`
	- tecnologia:
		- trajaremos con astro version 6(htmx , islas reacts version 19)
		- css de tailwind version 4 y los  componentes de shandcn
- utilizremos un metodo moderno de enseñanza en programacion
- trabajaremos con.
	- teoria:
		- explicacion breve, concisa y tecnica
		- utilizar tablas y listas
		- ejemplos y explicaciones para programadores juniors y seniors
		- ejemplos utilizar codigo limpio
	- utilizaremos tecnicas gaming, quiz  y ejercicios basicos
	- crearemos diferentes niveles de dificultad para que sea mas ameno subir
- la subiremos a github y crearemos una github page con el contenido
#Formato
- tiene que ser un app responsive para web y mobile. principalmente para movil.
- rapida, sencilla, elegante,colores que no casen a la vista y facil de navegar
- utilizar tamaño fuentes que se vean desde la pantalla de movil
- tabla con links de la principales  referencia utilizadas y webs docummentacion oficial
- estructura proyecto:
````text
/
├── src/
│   ├── components/       # Componentes React (.jsx/.tsx) y Astro (.astro)
│   ├── content/          # Archivos Markdown (.md) u MDX (.mdx)
│   │   ├── blog/         # Colección de contenido "blog"
│   │   │   ├── post-1.md
│   │   │   └── config.ts # Definición del esquema (Zod)
│   ├── layouts/          # Plantillas base para las páginas
│   └── pages/            # Rutas del sitio
│       ├── index.astro
│       └── blog/
│           └── [slug].astro # Página dinámica para renderizar posts
├── public/               # Archivos estáticos (imágenes, favicon)
├── astro.config.mjs      # Configuración e integraciones (React, MDX)
└── package.json

````
#restringiciones

- dividir la tarea en diferentes promps segun roles y objetivos.


## orden subida y limpieza
 # 2. Eliminar caché de Astro
Remove-Item -Recurse -Force .astro
# 3. (Opcional) Eliminar otras cachés
Remove-Item -Recurse -Force node_modules\.astro
Remove-Item -Recurse -Force dist

 # 4. Reiniciar servidor
 
# 2. Eliminar caché de Astro
 Remove-Item -Recurse -Force .astro

# 3. (Opcional) Eliminar otras cachés
Remove-Item -Recurse -Force node_modules\.astro
Remove-Item -Recurse -Force dist
# 4. Reiniciar servidor
npm run dev