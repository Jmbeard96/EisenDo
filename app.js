function getText(){
    var textBox = $('#textbox').val();
    $('#textbox').val("");
    return textBox;
}

$('#submit').click(function(){
    var toDoVal = getText();
    
    if(document.getElementById('important').checked && document.getElementById('urgent').checked){
        $('#both').append("<div> <p>" + toDoVal + "</p> </div>");
    }else if(document.getElementById('important').checked && !(document.getElementById('urgent').checked)){
        $('#impNotUrg').append("<div> <p>" + toDoVal + "</p> </div>");
    }else if(!(document.getElementById('important').checked) && document.getElementById('urgent').checked){
        $('#urgNotImp').append("<div> <p>" + toDoVal + "</p> </div>");
    }else{
        $('#neither').append("<div> <p>" + toDoVal + "</p> </div>");
    }
})
