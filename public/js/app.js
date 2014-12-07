$( document ).ready(function() {
    $("#search").focus(function(){
    	$('#search-dropdown').removeClass('hide');
   	});

  	$("#hide-box").click(function(){
    	$('#search-dropdown').addClass('hide');
   	}); 
});
