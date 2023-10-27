import{c as t,r as s,m as l}from"./render-template.ec07a378.js";import{u as o}from"./hoisted.26653573.js";import"./astro-assets-services.5d54009f.js";const n=`<h2 id="css-pseudo-elements">CSS pseudo-elements</h2>
<p>A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).</p>
<h2 id="syntax">Syntax</h2>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">selector::pseudo-element {</span></span>
<span class="line"><span style="color: #F8F8F2">   property: value;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>In this lesson we’ll study following CSS pseudo elements:</p>
<ul>
<li>::after</li>
<li>::before</li>
<li>::first-letter</li>
<li>::first-line</li>
<li>::selection</li>
</ul>
<h2 id="the-after-pseudo-element">The ::after Pseudo-element</h2>
<p>The ::after CSS pseudo-elemnt creates a pseudo-element that is the last child of the selected element.</p>
<p>It is commonly used with the content CSS property to add cosmetics to the selected element.</p>
<p>The creared element is inline by default.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">.true::after {</span></span>
<span class="line"><span style="color: #F8F8F2">   content: "-> True";</span></span>
<span class="line"><span style="color: #F8F8F2">   color: green;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">.false::after {</span></span>
<span class="line"><span style="color: #F8F8F2">   content: "-> False";</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h2 id="the-before-pseudo-element">The ::before pseudo-element</h2>
<p>The ::before CSS pseudo-element creates a pseudo-element that is the first child of the selected element.</p>
<p>It is commontly used with the content CSS property to add cosmetics to the selected element.</p>
<p>The created element is inline by default.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">.true::before {</span></span>
<span class="line"><span style="color: #F8F8F2">   content: "-> True";</span></span>
<span class="line"><span style="color: #F8F8F2">   color: green;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">.false::befofe {</span></span>
<span class="line"><span style="color: #F8F8F2">   content: "-> False";</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>We can also use it on HTML lists to add custom bullets:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">ul {</span></span>
<span class="line"><span style="color: #F8F8F2">   list-style-type: none;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">li:before {</span></span>
<span class="line"><span style="color: #F8F8F2">   content: "->";</span></span>
<span class="line"><span style="color: #F8F8F2">  color: blue;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h2 id="the-first-letter-pseudo-element">The ::first-letter Pseudo-element</h2>
<p>The ::first-letter CSS pseudo-element applies styles to the first letter of the first line of the selected block-level element.</p>
<p>Allowed CSS properties:</p>
<ul>
<li>All font properties</li>
<li>All background properties</li>
<li>All margin properties</li>
<li>All padding properties</li>
<li>All border properties</li>
<li>All color property</li>
<li>word-spacing, letter-spacing, text-decoration, text-transform, line-height, text-shadow, text-decoration-style, vertical-align</li>
</ul>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">p::first-letter {</span></span>
<span class="line"><span style="color: #F8F8F2">   text-decoration: overline;</span></span>
<span class="line"><span style="color: #F8F8F2">   font-size: 250%;</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h2 id="the-forst-line-pseudo-elemnt">The forst-line Pseudo-elemnt</h2>
<p>The ::first-line CSS pseudo-element applies styles to the first line of the selected block-level element.</p>
<p>Allowed CSS Properties:</p>
<ul>
<li>All font properties</li>
<li>All background properties</li>
<li>The color property</li>
<li>word-spacing, letter-spacing, text-decoration, text-transform, line-height, text-shadow, text-decoration, text-decoration-color, text-decoration-line, text-decoration-style, vertical-align.</li>
</ul>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">p::first-line {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: #f8f9f9;</span></span>
<span class="line"><span style="color: #F8F8F2">   background-color: #173459;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h2 id="the-selection-pseudo-element">The ::selection Pseudo-element</h2>
<p>The ::selection CSS pseudo-element applies styles to the part of a document that has been hijhlighted or selected by the user.</p>
<p>Allowed CSS Properties:</p>
<ul>
<li>color</li>
<li>background-color</li>
<li>cursor</li>
<li>caret-color</li>
<li>outline css properties</li>
<li>text-decoration and its associated properties</li>
<li>text-emphasis-color</li>
<li>text-shadow</li>
</ul>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">p::selection, textarea::selection {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: green;</span></span>
<span class="line"><span style="color: #F8F8F2">   background-color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>`,a={title:"CSS Pseudo-elements",description:"CSS Pseudo-elements, Child combinator, Descendant combinator, Adjacent zibiling combinator, General sibling combinator.",publishDate:"10 Sept 2023",tags:["CSS"],minutesRead:"2 min read"},r="/home/ignacio/DevHome/blog-dev-astro/src/content/post/css-pseudo-elements/index.md",p=void 0;function m(){return`
## CSS pseudo-elements

A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).

## Syntax

\`\`\`CSS
selector::pseudo-element {
   property: value;
}
\`\`\`

In this lesson we'll study following CSS pseudo elements:

- ::after
- ::before
- ::first-letter
- ::first-line
- ::selection

## The ::after Pseudo-element

The ::after CSS pseudo-elemnt creates a pseudo-element that is the last child of the selected element.

It is commonly used with the content CSS property to add cosmetics to the selected element.

The creared element is inline by default.

\`\`\`CSS
.true::after {
   content: "-> True";
   color: green;
}
.false::after {
   content: "-> False";
   color: red;
}
\`\`\`

## The ::before pseudo-element

The ::before CSS pseudo-element creates a pseudo-element that is the first child of the selected element.

It is commontly used with the content CSS property to add cosmetics to the selected element.

The created element is inline by default.

\`\`\`CSS
.true::before {
   content: "-> True";
   color: green;
}
.false::befofe {
   content: "-> False";
   color: red;
}
\`\`\`

We can also use it on HTML lists to add custom bullets:

\`\`\`CSS
ul {
   list-style-type: none;
}
li:before {
   content: "->";
  color: blue;
}
\`\`\`

## The ::first-letter Pseudo-element

The ::first-letter CSS pseudo-element applies styles to the first letter of the first line of the selected block-level element.

Allowed CSS properties:

- All font properties
- All background properties
- All margin properties
- All padding properties
- All border properties
- All color property
- word-spacing, letter-spacing, text-decoration, text-transform, line-height, text-shadow, text-decoration-style, vertical-align

\`\`\`CSS
p::first-letter {
   text-decoration: overline;
   font-size: 250%;
   color: red;
}
\`\`\`

## The forst-line Pseudo-elemnt

The ::first-line CSS pseudo-element applies styles to the first line of the selected block-level element.

Allowed CSS Properties:

- All font properties
- All background properties
- The color property
- word-spacing, letter-spacing, text-decoration, text-transform, line-height, text-shadow, text-decoration, text-decoration-color, text-decoration-line, text-decoration-style, vertical-align.

\`\`\`CSS
p::first-line {
   color: #f8f9f9;
   background-color: #173459;
}
\`\`\`

## The ::selection Pseudo-element

The ::selection CSS pseudo-element applies styles to the part of a document that has been hijhlighted or selected by the user.

Allowed CSS Properties:

- color
- background-color
- cursor
- caret-color
- outline css properties
- text-decoration and its associated properties
- text-emphasis-color
- text-shadow

\`\`\`CSS
p::selection, textarea::selection {
   color: green;
   background-color: red;
}
\`\`\`
`}function y(){return n}function S(){return[{depth:2,slug:"css-pseudo-elements",text:"CSS pseudo-elements"},{depth:2,slug:"syntax",text:"Syntax"},{depth:2,slug:"the-after-pseudo-element",text:"The ::after Pseudo-element"},{depth:2,slug:"the-before-pseudo-element",text:"The ::before pseudo-element"},{depth:2,slug:"the-first-letter-pseudo-element",text:"The ::first-letter Pseudo-element"},{depth:2,slug:"the-forst-line-pseudo-elemnt",text:"The forst-line Pseudo-elemnt"},{depth:2,slug:"the-selection-pseudo-element",text:"The ::selection Pseudo-element"}]}const b=t((i,c,d)=>{const{layout:u,...e}=a;return e.file=r,e.url=p,s`${l()}${o(n)}`});export{b as Content,y as compiledContent,b as default,r as file,a as frontmatter,S as getHeadings,m as rawContent,p as url};
