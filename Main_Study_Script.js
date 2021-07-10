

	// Contact Us Form JavaScript

function openForm() {
  	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  	document.getElementById("myForm").style.display = "none";
}

	// Form Data Json stringify JavaScript

function onSubmit( form ){
  var data = JSON.stringify( $(form).serializeArray() );
  console.log( data );
  $('form').trigger("reset");
  return false;
}


/*
$( "form" ).submit(function( event ) {
  	console.log(JSON.stringify( 'form' ));
  	event.preventDefault();
  	$('form').trigger("reset");
});


	// Show Result JavaScript

function show_hide() {
var x = document.getElementById("result_display");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "block";
	}
}

function hide_display() {
var x = document.getElementById("result_display_proposal");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function show_hide_new_criteria() {
var x = document.getElementById("result_display_new_criteria");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
*/