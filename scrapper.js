localStorage.setItem("colors", JSON.stringify({
    warm: [],
    cold: []
  })
);
var colors = {};
colors.warm = [];
colors.cold = [];

jQuery( '.palette .c' ).click(function( event ) {
  event.preventDefault()
  var c = jQuery(this).css('background-color');
  console.log(event);
  // Warm color? Click on top of it.
  // If Cold, click while pressing Ctrl key
  if ( event.ctrlKey ) {
    console.log(  "cold", jQuery(this).css('background-color') );
    colors.cold.push(c);
  }else{
    console.log( "warm",  c);
    colors.warm.push(c);
  }

  localStorage["colors"] = JSON.stringify(colors);
});