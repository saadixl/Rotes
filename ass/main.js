jQuery.fn.selectText = function(){
   var doc = document;
   var element = this[0];
   console.log(this, element);
   if (doc.body.createTextRange) {
       var range = document.body.createTextRange();
       range.moveToElementText(element);
       range.select();
   } else if (window.getSelection) {
       var selection = window.getSelection();        
       var range = document.createRange();
       range.selectNodeContents(element);
       selection.removeAllRanges();
       selection.addRange(range);
   }
};

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

        var newTagP = document.createElement("p");
        var tagPText = document.createTextNode(title);
        newTagP.appendChild(tagPText);

        newTag.appendChild(newTagP);

        var newTagSpan2 = document.createElement("span");
        var tagSpantext2 = document.createTextNode(content);
        newTagSpan2.appendChild(tagSpantext2);

        newTag.appendChild(newTagSpan2);

        document.getElementById('tags').appendChild(newTag);
        $('.title, .content').val("");
        $('.title').focus();
        localStorage.previousCode = $("#tags").html();
    }
});


$('.tags').delegate('p', 'click', function() {
    $(this).parent().find("span").toggle();

});

$('.tags').delegate('span','click',function(){
    $(this).selectText();
});

$('.clear').click(function(){
	$('.tags').empty();
	localStorage.clear();
});

$('.showall').click(function(){
    $('.tags span').each(function(){
        $(this).show();
    });
});

$('.hideall').click(function(){
    $('.tags span').each(function(){
        $(this).hide();
    });
});