'use-strict';

// TODO: fig out how to un-global somehow
var views = {};

views.handleMainNav = function(){
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

views.toggleHamburger = function(){
  $('#hamburger').on('click', function(){
    $('#nav-list').show();
    $('#hamburger').hide();
  });
}

views.render = function(){
  Volunteer.all.forEach(function(volunteerDataObj){
    $('#volunteer').append(volunteerDataObj.toHtml());
  });
}

$(function(){
  views.handleMainNav();
  views.toggleHamburger();
});
