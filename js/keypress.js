var display = document.getElementById('display');

var altKey = document.getElementById('altKey');
var ctrlKey = document.getElementById('ctrlKey');
var shiftKey = document.getElementById('shiftKey');
var metaKey = document.getElementById('metaKey');

var code = document.getElementById('code');
var charCode = document.getElementById('charCode');
var key = document.getElementById('key');
var keyCode = document.getElementById('keyCode');
var type = document.getElementById('type');

var preventdefault = document.getElementById('preventdefault');
var stoppropagation = document.getElementById('stoppropagation');

document.addEventListener('keypress', (e) => {
  display.textContent = e.key;
  altKey.textContent = e.altKey;
  ctrlKey.textContent = e.ctrlKey;
  shiftKey.textContent = e.shiftKey;
  metaKey.textContent = e.metaKey;
  code.textContent = e.code;
  charCode.textContent = e.charCode;
  key.textContent = e.key;
  keyCode.textContent = e.keyCode;
  type.textContent = e.type;
  if ( preventdefault.checked ){ e.preventDefault(); }
  if ( stoppropagation.checked ){ e.stopPropagation(); }
});
