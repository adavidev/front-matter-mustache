import fm from "front-matter";
import Handlebars from "handlebars";
import showdown from "showdown";

var FmTester = function() {
    return {
        constructor : function() {
        },
        convert : function(data) {

            //front-matter
            var fmdata = fm(data)

            //handlebars
            var template = Handlebars.compile(fmdata.body);
            var rendered = template(fmdata.attributes);

            //showdown
            var converter = new showdown.Converter();
            var output = converter.makeHtml(rendered)

            return output;
        },
    }
}

window.updateOutput = function(e){
    var input = document.getElementById("input-md");
    var output = document.getElementById("output-md");

    output.innerHTML = new FmTester().convert(input.value)
}