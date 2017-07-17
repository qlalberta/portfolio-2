'use-strict';

var projectView = {};

projectView.handleMainNav = function(){
  // click on nav-item hides other content
  $('#main-nav').find('li').on('click', function(){
    $('.content').hide();
  // reveals only nav-item clicked
    var selected = $(this).attr('data-content');
    // dynamically build selector with correct ID based on data
    $('section[id="' + selected + '"]').show();
  });
  // autoclick about on load
  $('#main-nav .nav-item:first').click();
};

$(function(){
  projectView.handleMainNav();
});
