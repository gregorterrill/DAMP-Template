# Device-Agnostic Master Page (DAMP) Template

This is a lightweight version of the Web Experience Toolkit (WET) designed from the ground up with enhanced code readability and responsive functionality in mind.

## Info
* Note that the W3 Validator throws an error about the following line: <pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /&gt;</code></pre> but this is legitimate code from HTML5 Boilerplate. More info: http://html5boilerplate.com/docs/The-markup/#make-sure-the-latest-version-of-ie-is-used
* This project uses LESS (http://lesscss.org) for CSS pre-processing.
* LESS files are divided into global styles, header/footer styles, and content styles.
* jShowOff (http://ekallevig.com/jshowoff/) is used as a simple image/content slider.
* debouncedresize.js (https://github.com/louisremi/jquery-smartresize) is used to decrease the number of resize events fired when adjusting window size/orientation.
* Semantic Grid System (http://semantic.gs/) can optionally be used for layout. Classes are available for content editors to apply column, push, and pull directly in the HTML - these classes simply call the appropriate mix-in (and yes, I realize this defeats the purpose of the semantic grid system).

## Grid System Notes
* The elements you apply the .column-x, .push-x and .pull-x classes to CANNOT have left/right borders or padding or everything will break in IE7 since it doesn't support box-sizing:border-box. A workaround is to wrap all the inside content of the element inside a div and apply your padding to that. Alternatively, apply your padding to all individual internal elements.