		
    // Result Display Part

		var i;
        var treatment_info = "Bellow the best result is displayed of your search (or closest match of your search) based on our database : <br><br>"; 
        var treatment_result = 

        [{  
            "name": "# Psychological treatment",
            "ranking": "Ranking: 1",
            "reviews": " Decided based on a total of 296 reviews.",
            "description": "Psychological treatment of a pain patient is based on cognitive-behavioral methods that aim to improve the patient’s overall holistic approach; especially psychosocial functioning and self-care grip. KBT therapy helps the patient to calm and stabilize their cognitive-emotional and psychophysical pain experience. KBT aims to help patients also build their identity in a new way, accept the changed situation and grow into the subject of their problems."
        }, {
            "name": "# Alexander Technique to change your own ways of doing business in a more present and freer direction",
            "ranking": "Ranking: 2",
            "reviews": "Decided based on a total of 165 reviews.",
            "description": "Alexander technology can be used to learn to be and act more freely and present. For the most common chronic low back pain, it has been found in an extensive study to provide long-term relief from pain by significantly reducing the number of pain days and improving functional capacity. On follow-up, it gave better results than massage, exercise counseling, or a regular doctor’s appointment. The limiting factor is that learning it requires personal guidance, but the study has already had an effect on six occasions, especially when combined with an exercise prescription. Google: 'Randomized controlled trial of Alexander technique Lessons - BMJ' or 'The potential of Alexander technique in rehabilitation thesis'."
        }, {
            "name": "# Thorough Biopsychosocial Assessment",
            "ranking": "Ranking: 3",
            "reviews": "Decided based on a total of 112 reviews.",
            "description": "Familiarization with the pathology, prognosis and causes of low back pain from a biopsychosocial point of view. Multi-professional correction of the patient's dysfunction and incorrect lifestyle, if necessary. Motivation for independent practice.",
        }, {
            "name": "# Illustrating the cause of the pain",
            "ranking": "Ranking: 4",
            "reviews": "Decided based on a total of 86 reviews.",
            "description": "For example, looking for a painful movement or, on the other hand, looking for a facilitative exercise together with the patient can teach the patient to study his or her own actions. The same model of logical reasoning can also be implemented in assessing the effect of drugs; the patient can keep a diary in which he observes the matter to be clarified. Experiences and observations can be used to motivate the patient. Cognitive tools are often too theoretical and far from practical ... a psychologist may observe a patient too much from a psychological perspective."  
        }, {
            "name": "# Pilates",
            "ranking": "Ranking: 5",
            "reviews": "Decided based on 56 reviews.",
            "description": "Works better in pain management than painkillers." 
        }];

        treatment_info = treatment_info.bold().fontsize(5);

        for (i = 0; i < treatment_result.length; i++) {
          
            treatment_info += treatment_result[i].name.bold().fontsize(4) + "<br>" + 
            treatment_result[i].ranking.bold().fontsize(4).fontcolor("grey") + "<br>" + treatment_result[i].reviews.fontcolor("blue") 
            + "<br>" + treatment_result[i].description +  "<br>" + "<br>";
        }

function displayInfo() {
    document.getElementById("desire-result-display").innerHTML = treatment_info;
}

function show_hide_button() {
	document.getElementById("hide-desire-result").style.display = "block";
}


    // Contact Us Form JavaScript

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


    // Range Slider JavaScript 

$( function() {
    $( "#slider-range1" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 40, 60 ],
    slide: function( event, ui ) {
        $( "#amount1" ).val( "" + ui.values[ 0 ] + " -- " + ui.values[ 1 ] );
        }
    });
        $( "#amount1" ).val( "" + $( "#slider-range1" ).slider( "values", 0 ) +
            " -- " + $( "#slider-range1" ).slider( "values", 1 ) );

    $( "#slider-range2" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 40, 60  ],
    slide: function( event, ui ) {
        $( "#amount2" ).val( "" + ui.values[ 0 ] + " -- " + ui.values[ 1 ] );
        }
    });
        $( "#amount2" ).val( "" + $( "#slider-range2" ).slider( "values", 0 ) +
            " -- " + $( "#slider-range2" ).slider( "values", 1 ) );

    $( "#slider-range3" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 40, 60 ],
    slide: function( event, ui ) { 
        $( "#amount3" ).val( "" + ui.values[ 0 ] + " -- " + ui.values[ 1 ] );
        }
    });
        $( "#amount3" ).val( "" + $( "#slider-range3" ).slider( "values", 0 ) +
           " -- " + $( "#slider-range3" ).slider( "values", 1 ) );

    $( "#slider-range4" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 40, 60  ],
    slide: function( event, ui ) {
        $( "#amount4" ).val( "" + ui.values[ 0 ] + " -- " + ui.values[ 1 ] );
        }
    });
        $( "#amount4" ).val( "" + $( "#slider-range4" ).slider( "values", 0 ) +
           " -- " + $( "#slider-range4" ).slider( "values", 1 ) );
});


    // Checkboxes and Range Sliders Json Stringify JavaScript 

function handleInputs(){
    $('input[type=checkbox]').each(function() {     
        if (!this.checked) {
            $(this).attr("value");
        }            
    });
    var data = JSON.stringify( $('#result-page-form').serializeArray() );
    console.log( data );
    return false;
}

function Range_Slider_1() {
  console.log(JSON.stringify( $('#amount1').serializeArray()));
}

function Range_Slider_2() {
  console.log(JSON.stringify( $('#amount2').serializeArray()));
}

function Range_Slider_3() {
  console.log(JSON.stringify( $('#amount3').serializeArray()));
}

function Range_Slider_4() {
  console.log(JSON.stringify( $('#amount4').serializeArray()));
}

function uncheckAll(){
   $('input[type="checkbox"]:checked').prop('checked',false);
}


/*
var reset_slider_1 = function( slider_selector ){
  
    // Reset the sliders to their original min/max values 
    $( slider_selector ).each(function(){

      var options = $(this).slider( 'option' );

      $(this).slider( 'values', [ 40, 60 ] );

    });  
  
};

$("form").on('click', function(){
  // selectors that are checked => $('input:checked').length
    var data = JSON.stringify( $('form').serializeName() );
    console.log( data ); 
});


function onSubmit( form ){
  var data = JSON.stringify( $(form).serializeArray() );
  console.log( data );
  return false; //don't submit
}




function Range_Slider_1() {
  var x = document.getElementById("amount1").value;
  console.log( $( this ).serializeArray() );
}

function Range_Slider_2() {
  document.getElementById("amount2").value;
  console.log( $( this ).serializeArray() );
}

function Range_Slider_3() {
  document.getElementById("amount3").value;
  console.log( $( this ).serializeArray() );
}
function Range_Slider_4() {
  document.getElementById("amount4").value;
  console.log( $( this ).serializeArray() );
}


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

			
