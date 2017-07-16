'use strict';

 // TODO: js architecture

function content(title, image, text, url){
  this.title = title;
  this.image = image;
  this.text = text;
  this.url = url;
}

// TODO: tweak this so it works like you want it to
function toggleHamburger(){
  $('#hamburger').on('click', function(){
    $('#nav-list').show();
    $('#hamburger').hide();
  });
}

toggleHamburger();
