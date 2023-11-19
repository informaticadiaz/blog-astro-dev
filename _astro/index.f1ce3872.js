import{c as a,r as l,m as o}from"./render-template.9b130c00.js";import{u as e}from"./hoisted.be9d1f0e.js";const s=`<h1 id="css-layout-horizontal-and-vertical-align">CSS Layout Horizontal and Vertical Align</h1>
<p>In this lesson, we’ll study how to align elements horizontally, vertically and both horizontally, vertically and both horizontally and vertically.</p>
<h2 id="horizontally">Horizontally</h2>
<p>Here is how to horizontally align elements:</p>
<h3 id="horizontally-centering-text-and-inline-elements">Horizontally centering text and inline elements</h3>
<p>To center inline elements and/or text we need to wet the text-align CSS property to center.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.center</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">text-align</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">center</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">width</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">100</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">border</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">3</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">solid</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="horizontally-centering-block-level-elements">Horizontally centering Block-level elements</h3>
<p>To horizontally center a block-level element, ser the left and right margins to auto.</p>
<p>It makes the left and right margins of an element be equally divided on each side.</p>
<p>Don’t forget to set the element’s width property so it will not stretch to the edges of its container.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.center</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">margin</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">0</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">auto</span><span style="color: #F8F8F2">; </span><span style="color: #6272A4">/* same as margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left: auto; */</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">width</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">60</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">20</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">border</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">3</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">solid</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="horizontally-centering-an-image">Horizontally centering an image</h3>
<p>To center an image we can simply use the same method as centering a block level element.</p>
<p>Since the <code>&#x3C;img></code> HTML element is an inline element by default we need to first set its display CSS property to
block.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.img</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">display</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">block</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">margin</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">0</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">auto</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">width</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">60</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">height</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">auto</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="left-and-right-align-text">Left and Right Align Text</h3>
<p>We can either left or right align text by setting the
text-align CSS property.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.left</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">text-align</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">left</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #50FA7B; font-style: italic">.right</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">text-align</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">right</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #FF79C6">p</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">background</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">lightgrey</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="left-and-right-align-elements">Left and Right Align Elements</h3>
<p>To left or right align elements use the position CSS property together qith the left or right properties.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.right</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">float</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">right</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">width</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">60</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">10</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">border</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">3</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">solid</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>Note! If the element is wrapped in a container the container should have a position: relative declaration.</p>
<p>Another method is to use the float CSS property.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.right</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">float</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">right</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">width</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">60</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">10</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">border</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">3</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">solid</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h2 id="vertically">Vertically</h2>
<p>Here is how to vertically align elements</p>
<h3 id="vertically-centering-using-padding">Vertically centering using Padding</h3>
<p>To vertically center a text or element inside a container set the top and bottom paaddings of the container with the same value.</p>
<p>Here is how to vertically center atext using padding:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">div</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding-top</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">40</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding-bottom</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">40</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">border</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">3</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">solid</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>You can set the text-align CSS property to center to both horizontally and
vertically center the text:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">div</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding-top</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">40</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding-bottom</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">40</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">text-align</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">center</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">border</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">3</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">solid</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>On the example bellow we will vertically center a <code>&#x3C;div></code> inside a <code>&#x3C;div></code> using padding.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">div</span><span style="color: #50FA7B; font-style: italic">.container</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding-top</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">40</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding-bottom</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">40</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">background</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#903c56</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #FF79C6">div</span><span style="color: #50FA7B; font-style: italic">.content</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">background</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#89c3d0</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="top-and-bottom-align-elements">Top and bottom align elements</h3>
<p>To top or bottom align elements use the position CSS property together with the top or bottom properties.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.bottom</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">position</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">absolute</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">bottom</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">0</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">width</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">60</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">padding</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">10</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">border</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">3</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">solid</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>Note! If the element is wrapped in a container the container should have a position: relative declaration.</p>
<h3 id="both-horizontally-and-vertically-centering-a-text">Both Horizontally and vertically centering a Text</h3>
<p>To center a text both horizontally and vertically inside an element (or container) we simply need to: define tur line-height property and set the text-align property to center.</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #FF79C6">div</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">width</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">250</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">line-height</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">250</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">text-align</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">center</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">font-size</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">20</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">background</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">lightblue</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<h3 id="both-horizontally-and-vertically-centering---using-position">Both horizontally and Vertically Centering - Using Position</h3>
<p>To both horizontally and vertically center and element or text in a container we need
to:</p>
<ol>
<li>Set the position property of the container to relative.</li>
<li>Set the posigion property of the container to absolute.</li>
<li>Position the element using the top and left properties.</li>
<li>Use the transform CSS property.</li>
</ol>
<p>Here is how to exactly do it:</p>
<pre class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #50FA7B; font-style: italic">.center</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #8BE9FD">position</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">relative</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #8BE9FD">height</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">500</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #8BE9FD">border</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">3</span><span style="color: #FF79C6">px</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">solid</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">#173459</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #50FA7B; font-style: italic">.center</span><span style="color: #FF79C6"> > p</span><span style="color: #F8F8F2"> {</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #8BE9FD">position</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">absolute</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #8BE9FD">top</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">50</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #8BE9FD">left</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">50</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #8BE9FD">transform</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">translate</span><span style="color: #F8F8F2">(</span><span style="color: #BD93F9">-50</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">, </span><span style="color: #BD93F9">-50</span><span style="color: #FF79C6">%</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>
<p>Note you’ll learn about the transform css property in our 2d transforms leasson.</p>`,t={title:"CSS Align",description:"CSS Layout - Horizontal and Vertical Align. how to align elements horizontally, vertically. Alinear vertical horizontal.",publishDate:"25 Oct 2023",tags:["CSS"],minutesRead:"3 min read"},p="/home/ignacio/devhome/blog-dev-astro/src/content/post/css-align/index.md",r=void 0;function g(){return`
# CSS Layout Horizontal and Vertical Align

In this lesson, we'll study how to align elements horizontally, vertically and both horizontally, vertically and both horizontally and vertically.

## Horizontally

Here is how to horizontally align elements:

### Horizontally centering text and inline elements

To center inline elements and/or text we need to wet the text-align CSS property to center.

\`\`\`css
.center {
 text-align: center;
 width: 100%;
 border: 3px solid #173459;
}
\`\`\`

### Horizontally centering Block-level elements

To horizontally center a block-level element, ser the left and right margins to auto.

It makes the left and right margins of an element be equally divided on each side.

Don't forget to set the element's width property so it will not stretch to the edges of its container.

\`\`\`css
.center {
 margin: 0 auto; /* same as margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left: auto; */
 width: 60%;
 padding: 20px;
 border: 3px solid #173459;
}
\`\`\`

### Horizontally centering an image

To center an image we can simply use the same method as centering a block level element.

Since the \`<img>\` HTML element is an inline element by default we need to first set its display CSS property to
block.

\`\`\`css
.img {
 display: block;
 margin: 0 auto;
 width: 60%;
 height: auto;
}
\`\`\`

### Left and Right Align Text

We can either left or right align text by setting the
text-align CSS property.

\`\`\`css
.left {
 text-align: left;
}
.right {
 text-align: right;
}
p {
 background: lightgrey;
}
\`\`\`

### Left and Right Align Elements

To left or right align elements use the position CSS property together qith the left or right properties.

\`\`\`css
.right {
 float: right;
 width: 60%;
 padding: 10px;
 border: 3px solid #173459;
}
\`\`\`

Note! If the element is wrapped in a container the container should have a position: relative declaration.

Another method is to use the float CSS property.

\`\`\`css
.right {
 float: right;
 width: 60%;
 padding: 10px;
 border: 3px solid #173459;
}
\`\`\`

## Vertically

Here is how to vertically align elements

### Vertically centering using Padding

To vertically center a text or element inside a container set the top and bottom paaddings of the container with the same value.

Here is how to vertically center atext using padding:

\`\`\`css
div {
 padding-top: 40px;
 padding-bottom: 40px;
 border: 3px solid #173459;
}
\`\`\`

You can set the text-align CSS property to center to both horizontally and
vertically center the text:

\`\`\`css
div {
 padding-top: 40px;
 padding-bottom: 40px;
 text-align: center;
 border: 3px solid #173459;
}
\`\`\`

On the example bellow we will vertically center a \`<div>\` inside a \`<div>\` using padding.

\`\`\`css
div.container {
 padding-top: 40px;
 padding-bottom: 40px;
 background: #903c56;
}
div.content {
 background: #89c3d0;
}
\`\`\`

### Top and bottom align elements

To top or bottom align elements use the position CSS property together with the top or bottom properties.

\`\`\`css
.bottom {
 position: absolute;
 bottom: 0;
 width: 60%;
 padding: 10px;
 border: 3px solid #173459;
}
\`\`\`

Note! If the element is wrapped in a container the container should have a position: relative declaration.

### Both Horizontally and vertically centering a Text

To center a text both horizontally and vertically inside an element (or container) we simply need to: define tur line-height property and set the text-align property to center.

\`\`\`css
div {
 width: 250px;
 line-height: 250px;
 text-align: center;
 font-size: 20px;
 background: lightblue;
}
\`\`\`

### Both horizontally and Vertically Centering - Using Position

To both horizontally and vertically center and element or text in a container we need
to:

1. Set the position property of the container to relative.
2. Set the posigion property of the container to absolute.
3. Position the element using the top and left properties.
4. Use the transform CSS property.

Here is how to exactly do it:

\`\`\`css
.center {
    position: relative;
    height: 500px;
    border: 3px solid #173459;
}
.center > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
\`\`\`

Note you'll learn about the transform css property in our 2d transforms leasson.
`}function m(){return s}function u(){return[{depth:1,slug:"css-layout-horizontal-and-vertical-align",text:"CSS Layout Horizontal and Vertical Align"},{depth:2,slug:"horizontally",text:"Horizontally"},{depth:3,slug:"horizontally-centering-text-and-inline-elements",text:"Horizontally centering text and inline elements"},{depth:3,slug:"horizontally-centering-block-level-elements",text:"Horizontally centering Block-level elements"},{depth:3,slug:"horizontally-centering-an-image",text:"Horizontally centering an image"},{depth:3,slug:"left-and-right-align-text",text:"Left and Right Align Text"},{depth:3,slug:"left-and-right-align-elements",text:"Left and Right Align Elements"},{depth:2,slug:"vertically",text:"Vertically"},{depth:3,slug:"vertically-centering-using-padding",text:"Vertically centering using Padding"},{depth:3,slug:"top-and-bottom-align-elements",text:"Top and bottom align elements"},{depth:3,slug:"both-horizontally-and-vertically-centering-a-text",text:"Both Horizontally and vertically centering a Text"},{depth:3,slug:"both-horizontally-and-vertically-centering---using-position",text:"Both horizontally and Vertically Centering - Using Position"}]}const B=a((F,c,i)=>{const{layout:y,...n}=t;return n.file=p,n.url=r,l`${o()}${e(s)}`});export{B as Content,m as compiledContent,B as default,p as file,t as frontmatter,u as getHeadings,g as rawContent,r as url};
