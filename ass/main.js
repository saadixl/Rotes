$(document).ready(function() {
    $('.title').focus();
    if(localStorage.previousCode){
    	$("#tags").html(localStorage.previousCode);
    }
    
});

$('input.title').keypress(function(e) {
    var key = e.which;
    if (key == 13) {
        $('.content').focus();
    }
});

$('.content').keypress(function(e) {
    var key = e.which;
    if (key == 13) {
        var title = $('input.title').val();
        var content = $('.content').val();
        var newTag = document.createElement("code");
        var tagTitle = document.createTextNode(title);
        newTag.appendChild(tagTitle);
        newTag.setAttribute("data-tagcontent", content);
        document.getElementById('tags').appendChild(newTag);
        $('.title, .content').val("");
        $('.title').focus();
        localStorage.previousCode = $("#tags").html();
    }
});


$('.tags').delegate('code', 'click', function() {
    $('.details').val($(this).data("tagcontent")).select();

});

$('.clear').click(function(){
	$('.tags').empty();
	localStorage.clear();
});
