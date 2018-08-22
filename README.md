# front-matter-mustache

---

title: "super cool site"
desc: "some interesting description"
author: "alans face"
adtl_info: "here is some adtl info for to remember to do"
styles: "h1{color:red;} .adtl{background:green; color:white}"

---

<style>
 {{styles}}
</style>

# {{title}}

*Author: {{author}}*

{{desc}}

<div class="adtl">{{adtl_info}}</div>