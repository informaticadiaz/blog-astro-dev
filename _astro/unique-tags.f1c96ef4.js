const t="unique-tags.md",e="post",s="unique-tags",a=`
## This post is to test zod transform

If you open the file \`src/content/post/unique-tags.md\`, the tags array has a number of duplicate blog strings of various cases.

These are removed as part of the removeDupsAndLowercase function found in \`src/content/config.ts\`.
`,n={title:"Unique tags validation",description:"This post is used for validating if duplicate tags are removed, regardless of the string case",publishDate:new Date(16750476e5),draft:!1,tags:["react"]},o={type:"content",filePath:"/home/ignacio/DevHome/blog-dev-astro/src/content/post/unique-tags.md",rawData:`
title: "Unique tags validation"
publishDate: "30 January 2023"
description: "This post is used for validating if duplicate tags are removed, regardless of the string case"
tags: ["React"]`};export{o as _internal,a as body,e as collection,n as data,t as id,s as slug};
