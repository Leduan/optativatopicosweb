$(document).ready(function(){ 
            $("#btLogon").click(function(){
                $(this).button('loading').delay(500).queue(function(){
                    $(this).button('reset');
                    $(this).dequeue();
                    $(location).attr('href', 'index.html');
                });        
            });
        });