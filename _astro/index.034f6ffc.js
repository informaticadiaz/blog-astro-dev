const n="git-comandos-basicos/index.md",a="post",s="git-comandos-basicos",t=`
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
`,o={title:"GIT Comandos Basicos",description:"Git, Comandos, Comandos Basicos, Git comandos Basicos.",publishDate:new Date(17005356e5),draft:!1,tags:["css"]},i={type:"content",filePath:"/home/ignacio/devhome/blog-dev-astro/src/content/post/git-comandos-basicos/index.md",rawData:`
title: "GIT Comandos Basicos"
description: "Git, Comandos, Comandos Basicos, Git comandos Basicos."
publishDate: "21 Nov 2023"
tags: ["CSS"]`};export{i as _internal,t as body,a as collection,o as data,n as id,s as slug};
