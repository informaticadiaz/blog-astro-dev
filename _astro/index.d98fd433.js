import{c as n,r as o,m as i}from"./render-template.9b130c00.js";import{u as l}from"./hoisted.be9d1f0e.js";const t=`<h2 id="align-horizontal-vertical">Align Horizontal Vertical</h2>
<p>In this lesson, we’ll study how to align elements horizontally, vertically and both horizontally, vertically and both horizontally and vertically.</p>
<p>Horizontally</p>
<p>Here is how to horizontally align elements:</p>
<p>Horizontally centering text and inline elements</p>
<p>To center inline elements and/or text we need to wet the text-align CSS property to center.</p>
<p>Code</p>
<p>Horizontally centering Block-level elements</p>
<p>To horizontally center a block-level  element, ser the left and right margins to auto.</p>
<p>It makes the left and right margins of an element be equally divided on each side.</p>
<p>Don’t forget to set the element’s width property so it will not stretch to the edges of its container.</p>
<p>Code</p>
<p>Horizontally centering an image</p>
<p>To center an image we can simply use the same method as centering a block level element.</p>
<p>Since the <img> HTML element is an inline element by default we need to first set its display CSS property to block.</p>
<p>Code</p>
<p>Left and Right Align Text</p>
<p>We can either left or right align text by setting the text-align CSS property.</p>
<p>Code</p>
<p>Left and Right Align Elements</p>
<p>To left or right align elements use the position CSS property together qith the left or right properties.</p>
<p>Code</p>
<p>Note! If the element is wrapped in a container the container should have a position: relative declaration.</p>
<p>Another method is to use the float CSS property.</p>
<p>Code</p>
<p>Vertically</p>
<p>Here is how to vertically align elements:
Vertically centering using Padding</p>
<p>To vertically center a text or element inside a container set the top and bottom paaddings of the container with the same value.</p>
<p>Here is how to vertically center a text using padding:</p>
<p>Code</p>
<p>You can set the trxt-align CSS property to center to both horizontally and vertically center the text:</p>
<p>Code</p>
<p>On the example bellow we will vertically center a </p><div> inside a <div> using padding.<p></p>
<p>Code</p>
<p>Top and bottom align elements</p>
<p>To top or bottom align elements use the position  CSS property together with the top or bottom properties.</p>
<p>Code</p>
<p>Note! If the element is wrapped in a container the container should have a position: relative declaration.</p>
<p>Both Horizontally and vertically centering a Text</p>
<p>To center a text both horizontally and vertically inside an element (or container) we simply need to: define tur line-height property and set the text-align property to center.</p>
<p>Code</p>
<p>Both horizontally and vertically centering - usigb position</p>
<p>To both horizontally and vertically center and element or text in a container we need to:</p>
<ol>
<li>set the position property of the container to relative.</li>
<li>set the posigion property of the container to absolute.</li>
<li>position the element using the top and left properties.</li>
<li>use the transform CSS property.</li>
</ol>
<p>Here is how to exactly do it:</p>
<p>Code</p>
<p>Note you’ll learn about the  transform css property in our 2d transforms leasson.</p>
<p>[[CSS]]</p></div></div>`,r={title:"CSS Align horizontal vertical",description:"CSS align, align element, align horizontal vertical.",publishDate:"20 Nov 2023",tags:["CSS"],minutesRead:"3 min read"},a="/home/ignacio/devhome/blog-dev-astro/src/content/post/css-horizontal-vertical-align/index.md",p=void 0;function m(){return`
## Align Horizontal Vertical

In this lesson, we'll study how to align elements horizontally, vertically and both horizontally, vertically and both horizontally and vertically.

Horizontally

Here is how to horizontally align elements:

Horizontally centering text and inline elements

To center inline elements and/or text we need to wet the text-align CSS property to center.

Code

Horizontally centering Block-level elements

To horizontally center a block-level  element, ser the left and right margins to auto.

It makes the left and right margins of an element be equally divided on each side.

Don't forget to set the element's width property so it will not stretch to the edges of its container.

Code

Horizontally centering an image

To center an image we can simply use the same method as centering a block level element.

Since the <img> HTML element is an inline element by default we need to first set its display CSS property to block.

Code

Left and Right Align Text

We can either left or right align text by setting the text-align CSS property.

Code

Left and Right Align Elements

To left or right align elements use the position CSS property together qith the left or right properties.

Code

Note! If the element is wrapped in a container the container should have a position: relative declaration.

Another method is to use the float CSS property.

Code

Vertically

Here is how to vertically align elements:
Vertically centering using Padding

To vertically center a text or element inside a container set the top and bottom paaddings of the container with the same value.

Here is how to vertically center a text using padding:

Code

You can set the trxt-align CSS property to center to both horizontally and vertically center the text:

Code

On the example bellow we will vertically center a <div> inside a <div> using padding.

Code

Top and bottom align elements

To top or bottom align elements use the position  CSS property together with the top or bottom properties.

Code

Note! If the element is wrapped in a container the container should have a position: relative declaration.

Both Horizontally and vertically centering a Text

To center a text both horizontally and vertically inside an element (or container) we simply need to: define tur line-height property and set the text-align property to center.

Code

Both horizontally and vertically centering - usigb position

To both horizontally and vertically center and element or text in a container we need to:

1) set the position property of the container to relative.
2) set the posigion property of the container to absolute.
3) position the element using the top and left properties.
4) use the transform CSS property.

Here is how to exactly do it:

Code

Note you'll learn about the  transform css property in our 2d transforms leasson.

[[CSS]]
`}function u(){return t}function v(){return[{depth:2,slug:"align-horizontal-vertical",text:"Align Horizontal Vertical"}]}const f=n((s,h,d)=>{const{layout:c,...e}=r;return e.file=a,e.url=p,o`${i()}${l(t)}`});export{f as Content,u as compiledContent,f as default,a as file,r as frontmatter,v as getHeadings,m as rawContent,p as url};
