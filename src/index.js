import _ from "lodash";
import * as fs from 'fs';
import fm from "front-matter";
import Handlebars from "handlebars";
import showdown from "showdown";

var FmTester = function() {
    return {
        constructor : function() {
        },
        observers : [],
        fmContent : function() {
            if (!this.content){
                this.content = {};
            }

            return this.content;
        },
        setFmContent: function(newFm) {
            if (!this.content){
                this.content = {};
            }
            this.content = newFm;

            this.observers.forEach(element => {
                element.InnerHTML = this.content
            });

            return this.content;
        },
        observe : function(observer) {
            this.observers.push(observer)
        },
        convert : function(data) {

            var fmdata = fm(data)

            var template = Handlebars.compile(fmdata.body);

            var rendered = template(fmdata.attributes);

            console.log(rendered);

            var converter = new showdown.Converter();
            var text = rendered;
            this.setFmContent(converter.makeHtml(text))

            return this.fmContent();
        },
    }
}

window.updateOutput = function(e){
    var input = document.getElementById("input-md");
    var output = document.getElementById("output-md");


    output.innerHTML = new FmTester().convert(input.value)
}
// ---

// title: "super cool site"
// desc: "some interesting description"
// author: "alans face"

// ---

// # {{title}}

// *Author: {{author}}*

// {{desc}}