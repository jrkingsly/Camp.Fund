$(function(){
	
	$('#accordion, #accordion-mobile').find('.accordion-toggle').click(function(){
		//Hide the other panels
		$(".accordion-content").not($(this).next()).slideUp('fast');
		//Expand or collapse this panel
		$(this).next().slideToggle('fast');	
	});
	     
	$('#thumbs').delegate('img', 'click', function() {
	    $('#largeImage').attr('src', $(this).attr('src').replace('thumb', 'large'));
	    window.location.hash = $('#thumbs img').index(this)+1;
	});
	
	
	wlh = window.location.hash[1];
	if (!isNaN(wlh)) {
	    $('#largeImage').attr('src', $('#thumbs img').eq(wlh-1).attr('src').replace('thumb', 'large'));
	}	
	
	$('#box').hide();
	
	$('#clickme, #clickme-mobile').on('click', function(e) {
	    e.preventDefault();
	    $(this).text(
	    	$(this).text() === 'Hide' ? 'Read More' : 'Hide'
	    );
	    $('#box, #box-mobile').slideToggle();
	});
});	
	
	
	
	
 
