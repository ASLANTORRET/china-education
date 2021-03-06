import React from 'react'
import $ from 'jquery'
import trumbowyg from "trumbowyg";
import "trumbowyg/dist/ui/trumbowyg.css";
import "trumbowyg/dist/plugins/base64/trumbowyg.base64.js";
import "trumbowyg/dist/plugins/noembed/trumbowyg.noembed.js";
import "trumbowyg/dist/plugins/pasteimage/trumbowyg.pasteimage.js";

class Trumbowyg extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.init()
  }
  componentWillUnmount() {
    $(this.textarea).trumbowyg('destroy');
  }
  init() {
    const { onChange } = this.props
    $.trumbowyg.svgPath = '/trumbowyg/icons.svg';
    $(this.textarea).trumbowyg({
      semantic: false,
      btnsDef: {
          // Customizables dropdowns
          image: {
              dropdown: ['insertImage', 'base64', 'noEmbed'],
              ico: 'insertImage'
          }
      },
      btns: [
          ['viewHTML'],
          ['undo', 'redo'],
          ['formatting'],
          'btnGrp-design',
          ['link'],
          ['image'],
          'btnGrp-justify',
          'btnGrp-lists',
          ['foreColor', 'backColor'],
          ['preformatted'],
          ['horizontalRule'],
          ['fullscreen']
      ],
    }).on('tbwchange', onChange)
  }
  render () {
    const { onChange, value } = this.props
    return <textarea onChange={ onChange } ref={(textarea) => {this.textarea = textarea}} value={ value }/>
  }
}

// AutoForm.addInputType("trumbowyg", {
//   template: "afTrumbowyg",
//   valueConverters: {
//     "stringArray": function (val) {
//       if (typeof val === "string" && val.length > 0) {
//         return linesToArray(val);
//       }
//       return val;
//     },
//     "number": AutoForm.valueConverters.stringToNumber,
//     "numberArray": AutoForm.valueConverters.stringToNumberArray,
//     "boolean": AutoForm.valueConverters.stringToBoolean,
//     "booleanArray": function (val) {
//       if (typeof val === "string" && val.length > 0) {
//         var arr = linesToArray(val);
//         return _.map(arr, function (item) {
//           return AutoForm.valueConverters.stringToBoolean(item);
//         });
//       }
//       return val;
//     },
//     "date": AutoForm.valueConverters.stringToDate,
//     "dateArray": function (val) {
//       if (typeof val === "string" && val.length > 0) {
//         var arr = linesToArray(val);
//         return _.map(arr, function (item) {
//           return AutoForm.valueConverters.stringToDate(item);
//         });
//       }
//       return val;
//     }
//   },
//   contextAdjust: function (context) {
//     if (typeof context.atts.maxlength === "undefined" && typeof context.max === "number") {
//       context.atts.maxlength = context.max;
//     }
//     return context;
//   }
// });

function linesToArray(text) {
  text = text.split('\n');
  var lines = [];
  _.each(text, function (line) {
    line = $.trim(line);
    if (line.length) {
      lines.push(line);
    }
  });
  return lines;
}

export default Trumbowyg
