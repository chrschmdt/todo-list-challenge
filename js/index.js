$(function () {

    // define elements
    let $textarea = $('textarea');
    let $info = $('#infoBox');
    let $cancelPromptBtn = $('#cancelBtn');
    let $addPromptBtn = $('#enterBtn');
    let $main = $('main');

    // clear the textarea and hide the prompt
    function cancelPrompt (){
        $textarea.val('');
        $textarea.text('');
        $info.hide();
    }

    // make an item with text and add it to the dom
    function makeItem(text){

        // make the new elements
        let $item = $(document.createElement('div'));
        let $p = $(document.createElement('p'));
        let $img = $(document.createElement('img'));

        // add the details
        $item.addClass('listItem');
        $img.addClass('removeBtn').attr('src', 'assets/x.svg').attr('alt', 'delete').click(function () {
            $item.remove();
        });
        $p.text(text);

        // put it all together
        $item.append($p);
        $item.append($img);
        $main.append($item);
    }

    // when user tries to add, make sure they entered text and add an item with it
    function addText () {
        let text = $textarea.val().trim();
        if (text !== "") makeItem(text);
        cancelPrompt();
    }
    
    // add item on enter or 'add' click
    $addPromptBtn.click(addText);
    $(document).keydown(function (e) {
        if (e.which === 13) {
            e.preventDefault();
            addText();
        }
    });

    // if they click cancel then cancel
    $cancelPromptBtn.click(cancelPrompt);

    // if they want to add an item, display the prompt
    $('#add').click(function () {
        $info.show();
    });

    // if user clicks on the x, remove item from dom
    $(".removeBtn").click(function () {
        $(this).parent().remove();
    });
});