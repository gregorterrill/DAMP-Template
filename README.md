# Device-Agnostic Master Page (DAMP) Template

This is a lightweight version of the Web Experience Toolkit (WET) with enhanced code readability and responsive functionality.

## Info
* This project uses LESS for CSS pre-processing.
* LESS files are divided into global styles, header/footer styles, and content styles.
* The Semantic Grid System is used for content layout (http://semantic.gs).
* Louis Remi's debouncedresize (https://github.com/louisremi/jquery-smartresize) is used to decrease the number of resize events fired when adjusting window size/orientation.
* Note that the W3 Validator throws an error about the line 
<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /&gt;</code></pre>
but this is legitimate code from HTML5 Boilerplate. See more info here (http://html5boilerplate.com/docs/The-markup/#make-sure-the-latest-version-of-ie-is-used).
