$( document ).ready(function() {

    
    $("#search").focus(function(){
    	$('#search-dropdown').removeClass('hide');
   	});

  	$("#search").focusout(function(){
    	$('#search-dropdown').addClass('hide');
   	}); 	

});
