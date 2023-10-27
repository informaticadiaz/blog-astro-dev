import{c as o,r as s,m as n}from"./render-template.ec07a378.js";import{u as r}from"./hoisted.26653573.js";import"./astro-assets-services.5d54009f.js";const e=`<h2 id="this-post-is-to-test-zod-transform">This post is to test zod transform</h2>
<p>If you open the file <code>src/content/post/unique-tags.md</code>, the tags array has a number of duplicate blog strings of various cases.</p>
<p>These are removed as part of the removeDupsAndLowercase function found in <code>src/content/config.ts</code>.</p>`,a={title:"Unique tags validation",publishDate:"30 January 2023",description:"This post is used for validating if duplicate tags are removed, regardless of the string case",tags:["React"],minutesRead:"1 min read"},i="/home/ignacio/DevHome/blog-dev-astro/src/content/post/unique-tags.md",c=void 0;function g(){return`
## This post is to test zod transform

If you open the file \`src/content/post/unique-tags.md\`, the tags array has a number of duplicate blog strings of various cases.

These are removed as part of the removeDupsAndLowercase function found in \`src/content/config.ts\`.
`}function v(){return e}function T(){return[{depth:2,slug:"this-post-is-to-test-zod-transform",text:"This post is to test zod transform"}]}const b=o((u,d,p)=>{const{layout:f,...t}=a;return t.file=i,t.url=c,s`${n()}${r(e)}`});export{b as Content,v as compiledContent,b as default,i as file,a as frontmatter,T as getHeadings,g as rawContent,c as url};
