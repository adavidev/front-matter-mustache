import fs from "fs";
import fm from "front-matter";
import Handlebars from "handlebars";

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
        read : function(filename = '') {
            var data = fs.readFileSync(filename, 'utf8');

            var fmdata = fm(data)

            var template = Handlebars.compile(fmdata.body);

            var rendered = template(fmdata.attributes);

            this.setFmContent(rendered)

            console.log(this.fmContent());
        },
    }
}

export default new FmTester();