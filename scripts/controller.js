'use strict';

// TODO: tweak this so it works like you want it to
// TODO: this is a controller
function toggleHamburger(){
  $('#hamburger').on('click', function(){
    $('#nav-list').show();
    $('#hamburger').hide();
  });
}

toggleHamburger();
