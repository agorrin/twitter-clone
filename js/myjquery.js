
$(document).ready(function(){
	var charCount = $('#char-count');

	$('#char-count, #tweet-submit').hide();
	$('.tweet-actions, .stats, .reply').hide();
	$('.tweet-compose').focus(function () {
    	$(this).animate({ height: "5em" }, 500);
    	$('#char-count, #tweet-submit').show();
	});
	$('.tweet-compose').blur(function ()	{
		$(this).animate({ height: "2.5em" }, 500);
		$('#char-count, #tweet-submit').hide();
	});
	$('.tweet').on('mouseenter', function()	{
		$('.tweet-actions').show();
	})
	$('.tweet').on('mouseleave', function()	{
		$('.tweet-actions').hide();
	})
	$('.tweet').on('click', function()	{
		$('.stats, .reply').show()
	})
	$('.tweet').on('dblclick', function ()	{
		$('.stats, .reply').hide();
	})

	function updateCountdown() {	
    	var remaining = 140 - $('.tweet-compose').val().length;
    	charCount.text(remaining);
	}
	updateCountdown();
    $('.tweet-compose').change(updateCountdown);
    $('.tweet-compose').keyup(updateCountdown);
    charCount.text(remaining);
    if (remaining < 10)	{
    	charCount.css('color', 'red');
    } else {
    	charCount.removeAttr('style');
    }

    if (remaining < 0)	{
    	$('#tweet-submit').attr('disabled', true)
    } else {
    	$('#tweet-submit').removeAttr('disabled')
    }
    
    //$('#tweet-submit').click(function ()	{
		//var newTweet = $('#tweet').clone();
		//newTweet.html($('.tweet-compose').val());
		
		//$('#stream').prepend(newTweet);
	//})



});