

$(document).ready(function(){
	 $('.roomSVGs').click(function(){
    var id = $(this).attr('class');
    console.log(id);
    IDArray = id.split(" ");
    console.log(IDArray[0]);
     var link = 'index.html#' + IDArray[0];
     console.log(link);
      $(location).attr('href', link);
    });
	});




// });

//
// var  triangle = document.getElementById("fourOne");
//
// triangle.addEventListener('click', function() {
//     $('#openRoom4_1').;
// });
