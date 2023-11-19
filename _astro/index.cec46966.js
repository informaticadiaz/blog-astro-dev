import{c as o,r,m as n}from"./render-template.9b130c00.js";import{u as i}from"./hoisted.be9d1f0e.js";const e=`<h2 id="generar-alias-para-directorios">generar alias para directorios</h2>
<p>editar archivo bashrc</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B">sudo</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">nano</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">~/.bashrc</span></span></code></pre>
<p>agregar las lineas necesarias al final del archivo, justo antes de export PS1=’> ’</p>
<p>por ejemplo para acceder al directorio <code>/home/devhome/diazignacio</code> agrego un alias llamado <code>diaz</code> con el valor del directorio</p>
<p><code>alias diaz='cd /home/devhome/diazignacio'</code></p>
<p>correr <code>source ~/.bashrc</code> para reiniciar bash y poder usar los comandos</p>
<p>de ahora en mas cada vez que quieras acceder al directorio <code>/home/devhome/diazignacio</code> puedes escribir en la terminal diaz.</p>
<p>Agilizando el trabajo cotidiano. Good code!</p>`,s={title:"BASH Alias",description:"Bash Alias Directory - Use bash alias - directory - alias - alias directory.",publishDate:"27 Oct 2023",tags:["BASH"],minutesRead:"1 min read"},c="/home/ignacio/devhome/blog-dev-astro/src/content/post/bash-alias/index.md",d=void 0;function g(){return`
## generar alias para directorios

editar archivo bashrc

\`\`\`bash
sudo nano ~/.bashrc
\`\`\`

agregar las lineas necesarias al final del archivo, justo antes de export PS1='> '

por ejemplo para acceder al directorio \`/home/devhome/diazignacio\` agrego un alias llamado \`diaz\` con el valor del directorio

\`alias diaz='cd /home/devhome/diazignacio'\`

correr \`source ~/.bashrc\` para reiniciar bash y poder usar los comandos

de ahora en mas cada vez que quieras acceder al directorio \`/home/devhome/diazignacio\` puedes escribir en la terminal diaz.

Agilizando el trabajo cotidiano. Good code!
`}function b(){return e}function v(){return[{depth:2,slug:"generar-alias-para-directorios",text:"generar alias para directorios"}]}const z=o((t,l,p)=>{const{layout:h,...a}=s;return a.file=c,a.url=d,r`${n()}${i(e)}`});export{z as Content,b as compiledContent,z as default,c as file,s as frontmatter,v as getHeadings,g as rawContent,d as url};
