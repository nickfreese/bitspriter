# bitspriter
JSON Sprite engine for HTML5 Canvas

Build JSON templates to define the colors, and their coordinates.  take a look at this example:

```myTemplate = {
    "char":[
        {
        "color":"#000000",
        "blocks":[
            {"x":"2","y":"2"},
            {"x":"2","y":"7"},
            {"x":"5","y":"2"},
            {"x":"5","y":"7"},
            {"x":"6","y":"3"},
            {"x":"6","y":"4"},
            {"x":"6","y":"5"},
            {"x":"6","y":"6"}
            ]
        }
    ],
    "name":"smiley"
};```

Look a little complex?  Same...  

Thats why I'm building a companion web app to help create and generate these templates.  Check back later for a link.

##Use The Template

Define your canvas element.
`<canvas id='canvas' width='500' height='500'></canvas>`

Add Bit Spriter
`<script src="bitspriter.js"></script>`

Pass the template and canvas element into the bitspriter render function
`bitspriter.render(document.getElementById('canvas'), myTemplate, {}, [0, 0] );`


