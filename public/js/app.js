$( document ).ready(function() {
    $("#search").focus(function(){
    	$('#search-dropdown').removeClass('hide');
   	});

  	$("#hide-box").click(function(){
    	$('#search-dropdown').addClass('hide');
   	}); 
   	$("#delete_experiment").click(function(){
    	document.body.style.backgroundColor="gray";
   		$('#delete').removeClass('hide');
   	}); 
   	$('.cancel-button').click(function(){
   		document.body.style.backgroundColor="white";
   		$('#delete').addClass('hide');	
   	});
});
