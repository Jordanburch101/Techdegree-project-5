$(document).ready(function(){
    $(".form-search").on("keyup", function() {
      const value = $(this).val().toLowerCase();
      $("[data-title]").filter(function() {
        $(this).toggle($(this).html().toLowerCase().indexOf(value) > -1)
      });
    });
  });