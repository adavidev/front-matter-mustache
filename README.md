Using front-matter and handlebars, we can create markdown files with variables listed first organizationally.

An example index page for this can be found in the index/dist.html

Here is an example of what is available to do in a markdown file with the addition of handlebars and front-matter.

```
---

title: "super cool site"
desc: "some interesting description"
author: "alans face"
adtl_info: "here is some adtl info for to remember to do"
styles: "h1{color:red;} .adtl{background:green; color:white}"
googles: "https://www.google.com"
googlewindow: "[Google](https://www.google.com)"

---

<style>
 {{styles}}
</style>

# {{title}}

*Author: {{author}}*

{{desc}}

If you have any questions, feel free to google it [Here]({{ googles }})!

Or possibly in a new window: {{ googlewindow }}

<div class="adtl">{{adtl_info}}</div>


```