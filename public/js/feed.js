$(document).ready(function(){
    $('#submit-button').click(function(){
        var text = $('#text').val();
        if (text.length > 0) {
            var listItem = document.createElement('li');
            listItem.innerText = text;
            $('#posts').prepend(listItem)
            $('#text').val('');

            $.ajax({
                method: "POST",
                url: "/newpost",
                data: { post: text }
            });
        }
    });
});