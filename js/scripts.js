$(".form-search").on("keyup", function(){
  const value = $(this).val().toLowerCase();

  $(`#searcharea div`).filter(function(){
    $(this).toggle($(this).html().toLowerCase().indexOf(value) > -1)
  });
});