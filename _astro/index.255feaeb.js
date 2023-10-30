import{c as a,r as o,m as e}from"./render-template.179cea7a.js";import{u as l}from"./hoisted.42a25906.js";const n=`<h2 id="6-types-of-arrow-functions">6 Types Of Arrow Functions</h2>
<h3 id="no-parameters">No parameters</h3>
<p>If The Function takes no parameters, you use empty parentheses.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">greet</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=></span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">Hello World!</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #50FA7B">log</span><span style="color: #F8F8F2">(</span><span style="color: #50FA7B">greet</span><span style="color: #F8F8F2">());</span></span>
<span class="line"><span style="color: #6272A4">// Output: Hello World!</span></span></code></pre>
<h3 id="single-parameter">Single Parameter</h3>
<p>if there’s only one parameter, parentheses are optional.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">square</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">x</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=></span><span style="color: #F8F8F2"> x </span><span style="color: #FF79C6">*</span><span style="color: #F8F8F2"> x;</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #50FA7B">log</span><span style="color: #F8F8F2">(</span><span style="color: #50FA7B">square</span><span style="color: #F8F8F2">(</span><span style="color: #BD93F9">4</span><span style="color: #F8F8F2">));</span></span>
<span class="line"><span style="color: #6272A4">// Output: 16</span></span></code></pre>
<h3 id="multiple-parameters">Multiple Parameters</h3>
<p>If there’s only one parameter, parentheses are optional.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">add</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">a</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">b</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=></span><span style="color: #F8F8F2"> a </span><span style="color: #FF79C6">+</span><span style="color: #F8F8F2"> b;</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #50FA7B">log</span><span style="color: #F8F8F2">(</span><span style="color: #50FA7B">add</span><span style="color: #F8F8F2">(</span><span style="color: #BD93F9">2</span><span style="color: #F8F8F2">, </span><span style="color: #BD93F9">3</span><span style="color: #F8F8F2">));</span></span>
<span class="line"><span style="color: #6272A4">// Output: 5</span></span></code></pre>
<h3 id="function-body-with-multiple-statements">Function Body With Multiple Statements</h3>
<p>If the function body has more than one statement, you need to use curly brackets and specify the return keyword. (if you want to return something).</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">greetPerson</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">name</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=></span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> greeting </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">Hello, </span><span style="color: #E9F284">"</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">+</span><span style="color: #F8F8F2"> name </span><span style="color: #FF79C6">+</span><span style="color: #F8F8F2"> </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">!</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">return</span><span style="color: #F8F8F2"> greeting;</span></span>
<span class="line"><span style="color: #F8F8F2">};</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #50FA7B">log</span><span style="color: #F8F8F2">(</span><span style="color: #50FA7B">greetPerson</span><span style="color: #F8F8F2">(</span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">Alice</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">));</span></span>
<span class="line"><span style="color: #6272A4">// Output: Hello, Alice!</span></span></code></pre>
<h3 id="returning-object-literals">Returning Object Literals</h3>
<p>When directly returning an object literal, wrap the literal in parentheses to differentiate it from function block.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">makePerson</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">firstName</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">last</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">lastName</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=></span><span style="color: #F8F8F2"> ({ first</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> firstName, last</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> lastName});</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #50FA7B">log</span><span style="color: #F8F8F2">(</span><span style="color: #50FA7B">makePerson</span><span style="color: #F8F8F2">(</span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">John</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">, </span><span style="color: #E9F284">"</span><span style="color: #F1FA8C">Doe</span><span style="color: #E9F284">"</span><span style="color: #F8F8F2">));</span></span>
<span class="line"><span style="color: #6272A4">// Output: { first: 'John', last: 'Doe' }</span></span></code></pre>
<h3 id="higher-order-functions-and-callbacks">Higher Order Functions and Callbacks</h3>
<p>Arrow functions are particularluy popular when used as short callbacks.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> numbers </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> [</span><span style="color: #BD93F9">1</span><span style="color: #F8F8F2">, </span><span style="color: #BD93F9">2</span><span style="color: #F8F8F2">, </span><span style="color: #BD93F9">3</span><span style="color: #F8F8F2">, </span><span style="color: #BD93F9">4</span><span style="color: #F8F8F2">];</span></span>
<span class="line"><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> doubled </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> numbers.</span><span style="color: #50FA7B">map</span><span style="color: #F8F8F2">((</span><span style="color: #FFB86C; font-style: italic">num</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=></span><span style="color: #F8F8F2"> num </span><span style="color: #FF79C6">+</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">2</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">console.</span><span style="color: #50FA7B">log</span><span style="color: #F8F8F2">(doubled);</span></span>
<span class="line"><span style="color: #6272A4">// Output: [2, 4, 6, 8]</span></span></code></pre>`,t={title:"6 Types of arrow functions",description:"Bash Alias Directory - Use bash alias - directory - alias - alias directory.",publishDate:"30 Oct 2023",tags:["JavaScript"],minutesRead:"1 min read"},p="/home/ignacio/devhome/blog-dev-astro/src/content/post/arrow-functions/index.md",r=void 0;function m(){return`
## 6 Types Of Arrow Functions

### No parameters

If The Function takes no parameters, you use empty parentheses.

\`\`\`javascript
const greet = () => "Hello World!";
console.log(greet());
// Output: Hello World!
\`\`\`

### Single Parameter

if there's only one parameter, parentheses are optional.

\`\`\`javascript
const square = (x) => x * x;
console.log(square(4));
// Output: 16
\`\`\`

### Multiple Parameters

If there's only one parameter, parentheses are optional.

\`\`\`javascript
const add = (a, b) => a + b;
console.log(add(2, 3));
// Output: 5
\`\`\`

### Function Body With Multiple Statements

If the function body has more than one statement, you need to use curly brackets and specify the return keyword. (if you want to return something).

\`\`\`javascript
const greetPerson = (name) => {
 const greeting = "Hello, " + name + "!";
 return greeting;
};
console.log(greetPerson("Alice"));
// Output: Hello, Alice!
\`\`\`

### Returning Object Literals

When directly returning an object literal, wrap the literal in parentheses to differentiate it from function block.

\`\`\`javascript
const makePerson =(firstName, last: lastName) => ({ first: firstName, last: lastName});
console.log(makePerson("John", "Doe"));
// Output: { first: 'John', last: 'Doe' }
\`\`\`

### Higher Order Functions and Callbacks

Arrow functions are particularluy popular when used as short callbacks.

\`\`\`javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num + 2);
console.log(doubled);
// Output: [2, 4, 6, 8]
\`\`\`
`}function h(){return n}function f(){return[{depth:2,slug:"6-types-of-arrow-functions",text:"6 Types Of Arrow Functions"},{depth:3,slug:"no-parameters",text:"No parameters"},{depth:3,slug:"single-parameter",text:"Single Parameter"},{depth:3,slug:"multiple-parameters",text:"Multiple Parameters"},{depth:3,slug:"function-body-with-multiple-statements",text:"Function Body With Multiple Statements"},{depth:3,slug:"returning-object-literals",text:"Returning Object Literals"},{depth:3,slug:"higher-order-functions-and-callbacks",text:"Higher Order Functions and Callbacks"}]}const g=a((F,c,y)=>{const{layout:i,...s}=t;return s.file=p,s.url=r,o`${e()}${l(n)}`});export{g as Content,h as compiledContent,g as default,p as file,t as frontmatter,f as getHeadings,m as rawContent,r as url};
