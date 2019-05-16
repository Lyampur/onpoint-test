$( function() {
  $( "#slider" ).slider({
    range: "min",
    value:0,
    min: 0,
    max: 2,
    step: 1,
    change: function(event, ui){
      if(ui.value == 0){
            $('#slide').attr('src','img/tab_1.png');
            $('#headline').html('Звенья патогенеза');
        }else if(ui.value == 1){
            $('#slide').attr('src','img/tab_2.png');
            $('#headline').html('Смертельный октет');
        }else{
            $('#slide').attr('src','img/tab_3.png');
            $('#headline').html('Звенья патогенеза СД2');
        }
    }
  });
} );
