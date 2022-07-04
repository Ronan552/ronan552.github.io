$(document).ready(function(){
    $( "#apiBtn" ).click(function() {
       
    $.ajax({
        url: "https://api.wheretheiss.at/v1/satellites",
        success: function (result) {
            $('#name').text(result[0].name)
            $('#id').text(result[0].id)
            console.log(result[0].name)
            $('#apiBtn2').show().data('id', result[0].id)
        }
    })
    });

    $( "#apiBtn2" ).click(function() {
        var id = $( "#apiBtn2" ).data('id')
        console.log(id)
        $.ajax({
            url: `https://api.wheretheiss.at/v1/satellites/${id}`,
            success: function (result) {
                $('#issTable').show()

                Object.keys(result).forEach(key => {
                    console.log(key, result[key])
                    $('#issTable').append(
                        `<tr><td>${key}</td><td>${result[key]}</td></tr>`
                        
                    );
                });
            }
        })
        });

})
