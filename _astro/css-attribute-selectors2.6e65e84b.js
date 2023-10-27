const e="css-attribute-selectors2.md",t="post",n="css-attribute-selectors2",a='\n## CSS Attribute Selectors\n\nThe CSS attribute selectors target elements based on the presence or value of a given attribute.\n\n### `[attr]`\n\nSelects elements with selectors target elements based on the presence or value of a given attribute.\n\nThe example below selects `<a>` elements with the title attribute.\n\n```CSS\na[title] {\n   color: red;\n}\n```\n\n### `[attr=value]`\n\nSelects elements with an attribute name of attr whose value is axactly value.\n\nThe example below selects `<a>` elements whose title attribute\'s value is exactly codeliber.\n\n```CSS\na[title="codeliber"] {\n   color:red;\n}\n```\n\n### [attr~=value]\n\nSelects elements with an attribute name of `attr` whose value is exactly `value`.\n\nIt can select elements with the attribute name `attr` that has multiple values (separated by white-spaces) including `value`.\n\nThe example below selects `<a>` elements whose `title` attribute\'s values are `codeliber`, `codeliber css`, `css codeliber`, `html codeliber css` but NOT `codelibers` and `codeliber-css`.\n\n```CSS\na[title~="codeliber"] {\n   color: red;\n}\n```\n\n### [attr|=value]\n\nSelects elements with an attribute name of `attr` whose value can be exactly `value` or can begin with `value` immediately followed by a hyphen, `(-)`.\n\nIt is often used for language subcode matches.\n\nThe example below selects `div` elements whose lang attribute values start with `en-`.\n\n```CSS\ndiv[lang|="en"] {\n   color: green;\n}\n```\n\nThe example below selects `<div>` elements whose lang attribute values start with `zh-`.\n\n```CSS\ndiv[lang="zh"] {\n   color: red;\n}\n```\n\n### `[attr^=value]`\n\nSelects elements with an attribute name of attr whose value is prefixed (preceded) by `value`.\n\nThe example below selects internal links(`<a>` elements whose `href` value starts with a hash `#`).\n\n```CSS\na[href^="#"] {\n   color:fuchsia;\n}\n```\n\n### `[attr$=value]`\n\nSelect elements with an attribute name of `attr` whose value is prefixed (preceded) by `value`.\n\nThe example below selects `<a>` elements whose `href` value ends with `.org`.\n\n```CSS\na[href*="exam"] {\n   color: red;\n}\n```\n\nNote! All attribute selectors values are cased sensitive by default.\n\nTo make the value be compared case-insesitively, simply add an `i` or `I` before the closing bracket.\n\n```CSS\na[title="codeliber" i] {\n color: red;\n}\n```\n',l={title:"CSS Attribute Selectors",description:"CSS Attribute Selectors, CSS Attribute Selectors attribute selectors target elements,",publishDate:new Date(16943148e5),draft:!0,tags:["css"]},s={type:"content",filePath:"/home/ignacio/DevHome/blog-dev-astro/src/content/post/css-attribute-selectors2.md",rawData:`
title: "CSS Attribute Selectors"
description: "CSS Attribute Selectors, CSS Attribute Selectors attribute selectors target elements,"
publishDate: "10 Sept 2023"
tags: ["CSS"]
draft: true`};export{s as _internal,a as body,t as collection,l as data,e as id,n as slug};
