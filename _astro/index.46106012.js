import{c as r,r as s,m as n}from"./render-template.9b130c00.js";import{u as o}from"./hoisted.be9d1f0e.js";const e=`<h2 id="ramas">Ramas</h2>
<h3 id="cambiar-de-rama">Cambiar de rama</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B">git</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">checkout</span><span style="color: #F8F8F2"> [nombre </span><span style="color: #F1FA8C">de</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">la</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">rama]</span></span></code></pre>
<h3 id="crear-nueva-rama">Crear nueva rama</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">git checkout -b [nombre de la rama]</span></span></code></pre>
<h3 id="publicar-una-rama">Publicar una rama</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">git push origin &#x3C;nombre-de-la-rama></span></span></code></pre>
<h3 id="publicar-todas-las-ramas-locales">Publicar todas las ramas locales</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">git push origin --all</span></span></code></pre>
<h3 id="eliminar-ramas">Eliminar ramas</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">git branch -d &#x3C;nombre de la rama></span></span></code></pre>
<h3 id="ver-si-las-ramas-están-actualizadas">Ver si las ramas están actualizadas</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B">git</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">fetch</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">--verbose</span></span></code></pre>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">git fetch</span></span></code></pre>
<h3 id="ver-el-estado-de-la-rama">Ver el estado de la rama</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">git status</span></span></code></pre>
<h3 id="conflictos-en-el-codigo">conflictos en el codigo</h3>
<p>hacer merge</p>
<p>git config merge.strategy</p>
<p>Resolver estrateguia
git pull origin main —strategy=resolve</p>
<p>git pull origin main —strategy={tipo-de-strateguia}</p>
<p>git remote -v</p>
<p>git merge main</p>
<p>git pull</p>
<p>[[Git]]</p>`,t={title:"GIT Comandos Basicos",description:"Git, Comandos, Comandos Basicos, Git comandos Basicos.",publishDate:"21 Nov 2023",tags:["CSS"],minutesRead:"1 min read"},l="/home/ignacio/devhome/blog-dev-astro/src/content/post/git-comandos-basicos/index.md",c=void 0;function h(){return`
## Ramas

### Cambiar de rama

\`\`\`bash
git checkout [nombre de la rama]
\`\`\`

### Crear nueva rama

\`\`\`Bash
git checkout -b [nombre de la rama]
\`\`\`

### Publicar una rama

\`\`\`Bash
git push origin <nombre-de-la-rama>
\`\`\`

### Publicar todas las ramas locales

\`\`\`Bash
git push origin --all
\`\`\`

### Eliminar ramas

\`\`\`Bash
git branch -d <nombre de la rama>
\`\`\`

### Ver si las ramas están actualizadas

\`\`\`bash
git fetch --verbose
\`\`\`

\`\`\`Bash
git fetch
\`\`\`

### Ver el estado de la rama

\`\`\`Bash
git status
\`\`\`

### conflictos en el codigo

hacer merge

git config merge.strategy

Resolver estrateguia
git pull origin main --strategy=resolve

git pull origin main --strategy={tipo-de-strateguia}

git remote -v

git merge main

git pull

[[Git]]
`}function b(){return e}function w(){return[{depth:2,slug:"ramas",text:"Ramas"},{depth:3,slug:"cambiar-de-rama",text:"Cambiar de rama"},{depth:3,slug:"crear-nueva-rama",text:"Crear nueva rama"},{depth:3,slug:"publicar-una-rama",text:"Publicar una rama"},{depth:3,slug:"publicar-todas-las-ramas-locales",text:"Publicar todas las ramas locales"},{depth:3,slug:"eliminar-ramas",text:"Eliminar ramas"},{depth:3,slug:"ver-si-las-ramas-están-actualizadas",text:"Ver si las ramas están actualizadas"},{depth:3,slug:"ver-el-estado-de-la-rama",text:"Ver el estado de la rama"},{depth:3,slug:"conflictos-en-el-codigo",text:"conflictos en el codigo"}]}const F=r((i,p,d)=>{const{layout:m,...a}=t;return a.file=l,a.url=c,s`${n()}${o(e)}`});export{F as Content,b as compiledContent,F as default,l as file,t as frontmatter,w as getHeadings,h as rawContent,c as url};
