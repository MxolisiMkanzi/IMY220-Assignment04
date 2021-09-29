//Mxolisi Mkanzi
$(document).ready(function(){
    console .log("Script added");
    //console.log("The data is: "+ $().text());
    $('div.details button').on('click', function(){
        //console.log("Button clicked");
    
        
        let _type = $(this).parent().data('type');
        let parent = $(this).parent();
        console.log(_type);

        let _inputColumn = $(this).siblings('b').text();
        
        
        if($(this).text()==="Edit"){

            let _data = $(this).siblings('span').text();
            $(this).siblings('span').remove();
            $(this).siblings('b').remove();

            //adding the input
            parent.append(
                $("<div></div>",{
                    html: "",
                    class: 'col-8'
                })
            );
    
            let div1 = parent.children('div.col-8');
            div1.append(
                $("<input></input>",{
                    value: _data,
                    type : _type
                })
            );
    
            $(this).text("Update");
        }
        else if($(this).text()==="Update"){
            let sib = $(this).siblings('div');
            let _data = sib.children('input').val();
            $(this).siblings('div').remove();
            if(_type === "text"){
                parent.append(
                    $("<b></b>",{
                        html: "Name: ",
                    })
                );
                parent.append(
                    $("<span></span>",{
                        html: _data
                    })
                );
            }
            else if(_type == "email "){
                parent.append(
                    $("<b></b>",{
                        html: "Email: "
                    })
                );
                parent.append(
                    $("<span></span>",{
                        html: _data
                    })
                );
            }
            else if(_type === "date"){
                parent.append(
                    $("<b></b>",{
                        html: "Birth date: "
                    })
                );
                parent.append(
                    $("<span></span>",{
                        html: _data
                    })
                );
            }

            $(this).text("Edit")
            
        }


    });
});
