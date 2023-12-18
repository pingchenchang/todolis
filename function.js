$(document).ready(function(){
    $("#enterBtn").click(function(){
        addTodo();
    });
  
    $(document).on('keypress',function(e) {
      if(e.which == 13) {
        addTodo();
      }
    });
  
    $(document).on('click', '.close', function() {
      $(this).parent().remove();
    });
  });
  
  function addTodo(){
  
    var inputTodo = $("#stuffInput").val();
    var checkImportant = false;
    var checkUrgent = false
  
    if (inputTodo.trim().length === 0) return;
  
    if ($('#importantCheck').is(":checked")){
      checkImportant = true;
    }else{
      checkImportant = false;
    };
    if ($('#urgentCheck').is(":checked")){
      checkUrgent = true;
    }else{
      checkUrgent = false;
    };
  
    // add todo
    if ( checkUrgent == true && checkImportant == true){
      $("#uiList").append('<li class="todo"> <input class ="mx-2" type="checkbox"> <label class ="mx-2">'+ inputTodo +'</label><span class="close">X</span></li>');
    };
    if ( checkUrgent == true && checkImportant == false){
      $("#uniList").append('<li class="todo"> <input class ="mx-2" type="checkbox"> <label class ="mx-2">'+ inputTodo +'</label><span class="close">X</span></li>');
    };
    if ( checkUrgent == false && checkImportant == true){
      $("#nuiList").append('<li class="todo"> <input class ="mx-2" type="checkbox"> <label class ="mx-2">'+ inputTodo +'</label><span class="close">X</span></li>');
    };
    if ( checkUrgent == false && checkImportant == false){
      $("#nuniList").append('<li class="todo"> <input class ="mx-2" type="checkbox"> <label class ="mx-2">'+ inputTodo +'</label><span class="close">X</span></li>');
    };
    
    $("#stuffInput").val("");
  
  };
  
  