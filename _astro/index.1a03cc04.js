const n="css-combinatiors/index.md",e="post",t="css-combinatiors",o=`
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

\`\`\`css
selector1 selector2 {
   /*CSS declarations*/
}
\`\`\`

Selects any element matching selector2 that is a descendant of an element matching selector1 (that is, a child, or a child of a child, etc)

The descendant combinator is represented by a single space .

Example:

\`\`\`css
div span {
   color: red;
}
\`\`\`

### Child Combinator

\`\`\`css
selector1 + selector2 {
 /*CSS declarations*/
}
\`\`\`

Selects any element matching selector2 that is a direct child of an element matching selector1.

The Child combinator is represented by the > character.

Example:

\`\`\`css
div > span {
   color: red;
}
\`\`\`

### Adjacent Sibiling Combinator

\`\`\`css
.selector1 + .secertor2 {
   /* CSS declarations */
}
\`\`\`

Selects any element matching selector2 if it inmediately follows elements matching selector1 and both are children of the same parent element (container).

The adjacent sibling combinator is represented by the + character.

Example:

\`\`\`css
li#two + li {
   color: red;
}
\`\`\`

### General Siblign combinator

\`\`\`css
.selector1 ~ .selector2 {
   /*CSS declarations*/
}
\`\`\`

Selects any element matching selector2 if it follows (not necessarily immediate) elements matching selector1 and both are children of the same parent element (container)

The general sibling combinator is represented by the ~ character.

Example:

\`\`\`css
li#two ~ li {
     color: red;
}
\`\`\`
`,i={title:"CSS Combinatiors",description:"CSS Combinatiors, Child combinator, Descendant combinator, Adjacent zibiling combinator, General sibling combinator.",publishDate:new Date(16981164e5),draft:!1,tags:["css"]},a={type:"content",filePath:"/home/ignacio/devhome/blog-dev-astro/src/content/post/css-combinatiors/index.md",rawData:`
title: "CSS Combinatiors"
description: "CSS Combinatiors, Child combinator, Descendant combinator, Adjacent zibiling combinator, General sibling combinator."
publishDate: "24 Oct 2023"
tags: ["CSS"]`};export{a as _internal,o as body,e as collection,i as data,n as id,t as slug};
