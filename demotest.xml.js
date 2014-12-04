// Wrapped in JavaScript, to avoid cross-origin restrictions, created using wrap-in-js.sh
define(function() {
return '<a:application xmlns:a="http://ajax.org/2005/aml">\n' +
'    <a:window\n' +
'      id        = "winDemoTest"\n' +
'      title     = "Demo Test Window"\n' +
'      center    = "true"\n' +
'      modal     = "false"\n' +
'      buttons   = "close"\n' +
'      skin      = "bk-window"\n' +
'      kbclose   = "true"\n' +
'      class     = "relative"\n' +
'      width     = "300">\n' +
'        <a:vbox>\n' +
'            <a:hbox padding="5" edge="10">\n' +
'                Hello World!\n' +
'            </a:hbox>\n' +
'            <a:hbox pack="end" padding="5" edge="6 10 10">\n' +
'                <a:button \n' +
'                  caption = "Close" \n' +
'                  skin    = "btn-default-css3"\n' +
'                  onclick = "\n' +
'                   require(\'ext/demotest/cloud9-demotest\').closeDemoTestWindow();"\n' +
'                 />\n' +
'            </a:hbox>\n' +
'        </a:vbox>\n' +
'    </a:window>\n' +
'</a:application>\n' +
'';});
