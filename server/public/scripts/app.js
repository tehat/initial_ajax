$(document).ready(function(){

    $("#button").on("click", function(){


        $.ajax({
            type: "GET",
            url: "/data",
            success: function(data){
            appendDom(data);
            }

        });
    });

    $("#target").on("click", ".delete", function(){
        $(this).parent().remove();
    })
});
function appendDom(data){
    var peopleArray = data.people;

    console.log(data);
    for(var i = 0; i < peopleArray.length; i++){
        var person = peopleArray[i];
        var el = "<div class='person center well col-md-3'>" +
                    "<img src="+ person.imageURL +" height='160' width='auto' class='center-block'></img>" +
                    "<div class='text-center'>" +person.name + "</div>" +
                    "<div class='text-center'>" + person.location + "</div>" +
                    "<div class='text-center'>" + person.position + "</div>" +

                    "<div class='center-block delete btn btn-warning'>DELETE</div>"
            "</div>";




        $('#target').append(el);
        $('#target').children().first().nextAll().addClass('col-md-offset-1');
    }



}
