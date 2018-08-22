import * as fs from 'fs';
import fm from "front-matter";
import Handlebars from "handlebars";
import showdown from "showdown";

var FmTester = function() {
    return {
        constructor : function() {
        },
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

            return this.content;
        },
        convert : function(data) {

            //front-matter
            var fmdata = fm(data)

            //handlebars
            var template = Handlebars.compile(fmdata.body);
            var rendered = template(fmdata.attributes);

            //showdown
            var converter = new showdown.Converter();
            this.setFmContent(converter.makeHtml(rendered))

            return this.fmContent();
        },
    }
}

window.updateOutput = function(e){
    var input = document.getElementById("input-md");
    var output = document.getElementById("output-md");

    output.innerHTML = new FmTester().convert(input.value)
}