import{c as a,r as s,m as o}from"./render-template.ec07a378.js";import{u as t}from"./hoisted.26653573.js";import"./astro-assets-services.5d54009f.js";const n=`<h2 id="css-combinatiors">CSS combinatiors</h2>
<p>In CSS, we can combine selectors to make fine-grained selections.</p>
<p>CSS has several ways to select elements based on how they are related to one another.</p>
<p>A CSS combinator expresses and explains the relationship between selectors.</p>
<p>CSS Combinators:</p>
<p>Descendant combinator
Child combinator >
Adjacent zibiling combinator +
General sibling combinator ~</p>
<h3 id="descendant-combinator">Descendant combinator</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">selector1 selector2 {</span></span>
<span class="line"><span style="color: #F8F8F2">   /*CSS declarations*/</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>Selects any element matching selector2 that is a descendant of an element matching selector1 (that is, a child, or a child of a child, etc)</p>
<p>The descendant combinator is represented by a single space .</p>
<p>Example:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">div span {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="child-combinator">Child Combinator</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">selector1 + selector2 {</span></span>
<span class="line"><span style="color: #F8F8F2"> /*CSS declarations*/</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>Selects any element matching selector2 that is a direct child of an element matching selector1.</p>
<p>The Child combinator is represented by the > character.</p>
<p>Example:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">div > span {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="adjacent-sibiling-combinator">Adjacent Sibiling Combinator</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">.selector1 + .secertor2 {</span></span>
<span class="line"><span style="color: #F8F8F2">   /* CSS declarations */</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>Selects any element matching selector2 if it inmediately follows elements matching selector1 and both are children of the same parent element (container).</p>
<p>The adjacent sibling combinator is represented by the + character.</p>
<p>Example:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">li#two + li {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="general-siblign-combinator">General Siblign combinator</h3>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">.selector1 ~ .selector2 {</span></span>
<span class="line"><span style="color: #F8F8F2">   /*CSS declarations*/</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>Selects any element matching selector2 if it follows (not necessarily immediate) elements matching selector1 and both are children of the same parent element (container)</p>
<p>The general sibling combinator is represented by the ~ character.</p>
<p>Example:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">li#two ~ li {</span></span>
<span class="line"><span style="color: #F8F8F2">     color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>`,r={title:"CSS Combinatiors",description:"CSS Combinatiors, Child combinator, Descendant combinator, Adjacent zibiling combinator, General sibling combinator.",publishDate:"10 Sept 2023",tags:["CSS"],draft:!0,minutesRead:"2 min read"},l="/home/ignacio/DevHome/blog-dev-astro/src/content/post/css-combinatiors2.md",c=void 0;function F(){return`
## CSS combinatiors

In CSS, we can combine selectors to make fine-grained selections.

CSS has several ways to select elements based on how they are related to one another.

A CSS combinator expresses and explains the relationship between selectors.

CSS Combinators:

Descendant combinator
Child combinator >
Adjacent zibiling combinator +
General sibling combinator ~

### Descendant combinator

\`\`\`CSS
selector1 selector2 {
   /*CSS declarations*/
}
\`\`\`

Selects any element matching selector2 that is a descendant of an element matching selector1 (that is, a child, or a child of a child, etc)

The descendant combinator is represented by a single space .

Example:

\`\`\`CSS
div span {
   color: red;
}
\`\`\`

### Child Combinator

\`\`\`CSS
selector1 + selector2 {
 /*CSS declarations*/
}
\`\`\`

Selects any element matching selector2 that is a direct child of an element matching selector1.

The Child combinator is represented by the > character.

Example:

\`\`\`CSS
div > span {
   color: red;
}
\`\`\`

### Adjacent Sibiling Combinator

\`\`\`CSS
.selector1 + .secertor2 {
   /* CSS declarations */
}
\`\`\`

Selects any element matching selector2 if it inmediately follows elements matching selector1 and both are children of the same parent element (container).

The adjacent sibling combinator is represented by the + character.

Example:

\`\`\`CSS
li#two + li {
   color: red;
}
\`\`\`

### General Siblign combinator

\`\`\`CSS
.selector1 ~ .selector2 {
   /*CSS declarations*/
}
\`\`\`

Selects any element matching selector2 if it follows (not necessarily immediate) elements matching selector1 and both are children of the same parent element (container)

The general sibling combinator is represented by the ~ character.

Example:

\`\`\`CSS
li#two ~ li {
     color: red;
}
\`\`\`
`}function w(){return n}function g(){return[{depth:2,slug:"css-combinatiors",text:"CSS combinatiors"},{depth:3,slug:"descendant-combinator",text:"Descendant combinator"},{depth:3,slug:"child-combinator",text:"Child Combinator"},{depth:3,slug:"adjacent-sibiling-combinator",text:"Adjacent Sibiling Combinator"},{depth:3,slug:"general-siblign-combinator",text:"General Siblign combinator"}]}const y=a((i,p,d)=>{const{layout:m,...e}=r;return e.file=l,e.url=c,s`${o()}${t(n)}`});export{y as Content,w as compiledContent,y as default,l as file,r as frontmatter,g as getHeadings,F as rawContent,c as url};
