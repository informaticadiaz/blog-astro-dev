import{c as a,r as e,m as n}from"./render-template.ec07a378.js";import{u as s}from"./hoisted.26653573.js";import"./astro-assets-services.5d54009f.js";const t=`<h2 id="adding-your-own-social-image-card-to-a-post">Adding your own social image card to a post</h2>
<p>This post is an example of how to add a custom social image, also known as an OG image, to a blog post.
By adding the optional ogImage property to the frontmatter of a post, <a href="https://github.com/vercel/satori">satori</a> won’t generate an image for this page.</p>`,i={title:"Example Social Image",publishDate:"27 January 2023",description:"An example post for Astro Cactus, detailing how to add a custom social image card in the frontmatter",tags:["Bash"],ogImage:"/social-card.png",minutesRead:"1 min read"},r="/home/ignacio/DevHome/blog-dev-astro/src/content/post/social-image.md",m=void 0;function f(){return`
## Adding your own social image card to a post

This post is an example of how to add a custom social image, also known as an OG image, to a blog post.
By adding the optional ogImage property to the frontmatter of a post, [satori](https://github.com/vercel/satori) won't generate an image for this page.
`}function w(){return t}function y(){return[{depth:2,slug:"adding-your-own-social-image-card-to-a-post",text:"Adding your own social image card to a post"}]}const b=a((c,d,g)=>{const{layout:p,...o}=i;return o.file=r,o.url=m,e`${n()}${s(t)}`});export{b as Content,w as compiledContent,b as default,r as file,i as frontmatter,y as getHeadings,f as rawContent,m as url};
