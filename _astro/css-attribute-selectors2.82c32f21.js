import{c as a,r as s,m as n}from"./render-template.ec07a378.js";import{u as l}from"./hoisted.26653573.js";import"./astro-assets-services.5d54009f.js";const t=`<h2 id="css-attribute-selectors">CSS Attribute Selectors</h2>
<p>The CSS attribute selectors target elements based on the presence or value of a given attribute.</p>
<h3 id="attr"><code>[attr]</code></h3>
<p>Selects elements with selectors target elements based on the presence or value of a given attribute.</p>
<p>The example below selects <code>&#x3C;a></code> elements with the title attribute.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">a[title] {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="attrvalue"><code>[attr=value]</code></h3>
<p>Selects elements with an attribute name of attr whose value is axactly value.</p>
<p>The example below selects <code>&#x3C;a></code> elements whose title attribute’s value is exactly codeliber.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">a[title="codeliber"] {</span></span>
<span class="line"><span style="color: #F8F8F2">   color:red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="attrvalue-1">[attr~=value]</h3>
<p>Selects elements with an attribute name of <code>attr</code> whose value is exactly <code>value</code>.</p>
<p>It can select elements with the attribute name <code>attr</code> that has multiple values (separated by white-spaces) including <code>value</code>.</p>
<p>The example below selects <code>&#x3C;a></code> elements whose <code>title</code> attribute’s values are <code>codeliber</code>, <code>codeliber css</code>, <code>css codeliber</code>, <code>html codeliber css</code> but NOT <code>codelibers</code> and <code>codeliber-css</code>.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">a[title~="codeliber"] {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="attrvalue-2">[attr|=value]</h3>
<p>Selects elements with an attribute name of <code>attr</code> whose value can be exactly <code>value</code> or can begin with <code>value</code> immediately followed by a hyphen, <code>(-)</code>.</p>
<p>It is often used for language subcode matches.</p>
<p>The example below selects <code>div</code> elements whose lang attribute values start with <code>en-</code>.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">div[lang|="en"] {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: green;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>The example below selects <code>&#x3C;div></code> elements whose lang attribute values start with <code>zh-</code>.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">div[lang="zh"] {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="attrvalue-3"><code>[attr^=value]</code></h3>
<p>Selects elements with an attribute name of attr whose value is prefixed (preceded) by <code>value</code>.</p>
<p>The example below selects internal links(<code>&#x3C;a></code> elements whose <code>href</code> value starts with a hash <code>#</code>).</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">a[href^="#"] {</span></span>
<span class="line"><span style="color: #F8F8F2">   color:fuchsia;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="attrvalue-4"><code>[attr$=value]</code></h3>
<p>Select elements with an attribute name of <code>attr</code> whose value is prefixed (preceded) by <code>value</code>.</p>
<p>The example below selects <code>&#x3C;a></code> elements whose <code>href</code> value ends with <code>.org</code>.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">a[href*="exam"] {</span></span>
<span class="line"><span style="color: #F8F8F2">   color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>Note! All attribute selectors values are cased sensitive by default.</p>
<p>To make the value be compared case-insesitively, simply add an <code>i</code> or <code>I</code> before the closing bracket.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">a[title="codeliber" i] {</span></span>
<span class="line"><span style="color: #F8F8F2"> color: red;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>`,o={title:"CSS Attribute Selectors",description:"CSS Attribute Selectors, CSS Attribute Selectors attribute selectors target elements,",publishDate:"10 Sept 2023",tags:["CSS"],draft:!0,minutesRead:"2 min read"},r="/home/ignacio/DevHome/blog-dev-astro/src/content/post/css-attribute-selectors2.md",c=void 0;function v(){return'\n## CSS Attribute Selectors\n\nThe CSS attribute selectors target elements based on the presence or value of a given attribute.\n\n### `[attr]`\n\nSelects elements with selectors target elements based on the presence or value of a given attribute.\n\nThe example below selects `<a>` elements with the title attribute.\n\n```CSS\na[title] {\n   color: red;\n}\n```\n\n### `[attr=value]`\n\nSelects elements with an attribute name of attr whose value is axactly value.\n\nThe example below selects `<a>` elements whose title attribute\'s value is exactly codeliber.\n\n```CSS\na[title="codeliber"] {\n   color:red;\n}\n```\n\n### [attr~=value]\n\nSelects elements with an attribute name of `attr` whose value is exactly `value`.\n\nIt can select elements with the attribute name `attr` that has multiple values (separated by white-spaces) including `value`.\n\nThe example below selects `<a>` elements whose `title` attribute\'s values are `codeliber`, `codeliber css`, `css codeliber`, `html codeliber css` but NOT `codelibers` and `codeliber-css`.\n\n```CSS\na[title~="codeliber"] {\n   color: red;\n}\n```\n\n### [attr|=value]\n\nSelects elements with an attribute name of `attr` whose value can be exactly `value` or can begin with `value` immediately followed by a hyphen, `(-)`.\n\nIt is often used for language subcode matches.\n\nThe example below selects `div` elements whose lang attribute values start with `en-`.\n\n```CSS\ndiv[lang|="en"] {\n   color: green;\n}\n```\n\nThe example below selects `<div>` elements whose lang attribute values start with `zh-`.\n\n```CSS\ndiv[lang="zh"] {\n   color: red;\n}\n```\n\n### `[attr^=value]`\n\nSelects elements with an attribute name of attr whose value is prefixed (preceded) by `value`.\n\nThe example below selects internal links(`<a>` elements whose `href` value starts with a hash `#`).\n\n```CSS\na[href^="#"] {\n   color:fuchsia;\n}\n```\n\n### `[attr$=value]`\n\nSelect elements with an attribute name of `attr` whose value is prefixed (preceded) by `value`.\n\nThe example below selects `<a>` elements whose `href` value ends with `.org`.\n\n```CSS\na[href*="exam"] {\n   color: red;\n}\n```\n\nNote! All attribute selectors values are cased sensitive by default.\n\nTo make the value be compared case-insesitively, simply add an `i` or `I` before the closing bracket.\n\n```CSS\na[title="codeliber" i] {\n color: red;\n}\n```\n'}function m(){return t}function F(){return[{depth:2,slug:"css-attribute-selectors",text:"CSS Attribute Selectors"},{depth:3,slug:"attr",text:"[attr]"},{depth:3,slug:"attrvalue",text:"[attr=value]"},{depth:3,slug:"attrvalue-1",text:"[attr~=value]"},{depth:3,slug:"attrvalue-2",text:"[attr|=value]"},{depth:3,slug:"attrvalue-3",text:"[attr^=value]"},{depth:3,slug:"attrvalue-4",text:"[attr$=value]"}]}const y=a((d,p,i)=>{const{layout:u,...e}=o;return e.file=r,e.url=c,s`${n()}${l(t)}`});export{y as Content,m as compiledContent,y as default,r as file,o as frontmatter,F as getHeadings,v as rawContent,c as url};
