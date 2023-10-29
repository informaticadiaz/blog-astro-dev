const a="bash-alias/index.md",e="post",i="bash-alias",o=`
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
`,s={title:"BASH Alias",description:"Bash Alias Directory - Use bash alias - directory - alias - alias directory.",publishDate:new Date(16983756e5),draft:!1,tags:["bash"]},n={type:"content",filePath:"/home/ignacio/devhome/blog-dev-astro/src/content/post/bash-alias/index.md",rawData:`
title: "BASH Alias"
description: "Bash Alias Directory - Use bash alias - directory - alias - alias directory."
publishDate: "27 Oct 2023"
tags: ["BASH"]`};export{n as _internal,o as body,e as collection,s as data,a as id,i as slug};
