$(function(){

	var clf = new kNN();
	clf.fit();

	$('#btnClassify').on('click', function(){
		var color = hexToRgb( $('#colorpicker').val() );
		var colorLabel = clf.predict(color);
		$('#colorClass').text(colorLabel).attr('class', colorLabel);
	});

})

// Util
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
    	[ parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16) ] 
    	: null;
}