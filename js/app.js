<!-- TODO: MVC me -->
'use strict';

 // TODO: js architecture

function content(title, image, text, url){
  this.title = title;
  this.image = image;
  this.text = text;
  this.url = url;
}

// TODO: hide primary-nav in mobile mode and show when hamburger clicked
if($('#hamburger')){
  $('#hamburger').on('click', function(){
    $('#nav-list').show();
    $('#hamburger').hide();
  });
}
