import{c as n,r as l,m as o}from"./render-template.09255677.js";import{u as t}from"./hoisted.1f25d9b5.js";const s=`<h2 id="css-pseudo-elements">CSS pseudo-elements</h2>
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
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.true</span><span style="color: #FF79C6; font-style: italic">::</span><span style="color: #50FA7B; font-style: italic">after</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">content</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">-> True</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">green</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #50FA7B; font-style: italic">.false</span><span style="color: #FF79C6; font-style: italic">::</span><span style="color: #50FA7B; font-style: italic">after</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">content</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">-> False</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">red</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h2 id="the-before-pseudo-element">The ::before pseudo-element</h2>
<p>The ::before css pseudo-element creates a pseudo-element that is the first child of the selected element.</p>
<p>It is commontly used with the content CSS property to add cosmetics to the selected element.</p>
<p>The created element is inline by default.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.true</span><span style="color: #FF79C6; font-style: italic">::</span><span style="color: #50FA7B; font-style: italic">before</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">content</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">-> True</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">green</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #50FA7B; font-style: italic">.false</span><span style="color: #FF79C6">::befofe</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">content</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">-> False</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">red</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>We can also use it on HTML lists to add custom bullets:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">ul</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">list-style-type</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">none</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #FF79C6">li</span><span style="color: #FF79C6; font-style: italic">:</span><span style="color: #50FA7B; font-style: italic">before</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">content</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">-></span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #8BE9FD">color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">blue</span><span style="color: #F8F8F2">;</span></span>
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
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">p</span><span style="color: #FF79C6; font-style: italic">::</span><span style="color: #50FA7B; font-style: italic">first-letter</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">text-decoration</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">overline</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">font-size</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">250</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">red</span><span style="color: #F8F8F2">;</span></span>
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
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">p</span><span style="color: #FF79C6; font-style: italic">::</span><span style="color: #50FA7B; font-style: italic">first-line</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#f8f9f9</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">background-color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
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
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">p</span><span style="color: #FF79C6; font-style: italic">::</span><span style="color: #50FA7B; font-style: italic">selection</span><span style="color: #F8F8F2">,</span><span style="color: #FF79C6"> textarea</span><span style="color: #FF79C6; font-style: italic">::</span><span style="color: #50FA7B; font-style: italic">selection</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">green</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">   </span><span style="color: #8BE9FD">background-color</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">red</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>`,a={title:"CSS Pseudo-elements",description:"CSS Pseudo-elements, Child combinator, Descendant combinator, Adjacent zibiling combinator, General sibling combinator.",publishDate:"23 Oct 2023",tags:["CSS"],minutesRead:"2 min read"},p="/home/ignacio/devhome/blog-dev-astro/src/content/post/css-pseudo-elements/index.md",r=void 0;function h(){return`
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

\`\`\`css
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

The ::before css pseudo-element creates a pseudo-element that is the first child of the selected element.

It is commontly used with the content CSS property to add cosmetics to the selected element.

The created element is inline by default.

\`\`\`css
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

\`\`\`css
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

\`\`\`css
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

\`\`\`css
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

\`\`\`css
p::selection, textarea::selection {
   color: green;
   background-color: red;
}
\`\`\`
`}function f(){return s}function m(){return[{depth:2,slug:"css-pseudo-elements",text:"CSS pseudo-elements"},{depth:2,slug:"syntax",text:"Syntax"},{depth:2,slug:"the-after-pseudo-element",text:"The ::after Pseudo-element"},{depth:2,slug:"the-before-pseudo-element",text:"The ::before pseudo-element"},{depth:2,slug:"the-first-letter-pseudo-element",text:"The ::first-letter Pseudo-element"},{depth:2,slug:"the-forst-line-pseudo-elemnt",text:"The forst-line Pseudo-elemnt"},{depth:2,slug:"the-selection-pseudo-element",text:"The ::selection Pseudo-element"}]}const b=n((c,i,F)=>{const{layout:d,...e}=a;return e.file=p,e.url=r,l`${o()}${t(s)}`});export{b as Content,f as compiledContent,b as default,p as file,a as frontmatter,m as getHeadings,h as rawContent,r as url};
