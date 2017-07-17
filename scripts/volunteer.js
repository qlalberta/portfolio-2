'use strict';

// class-04 handlebars goodness here

var volunteerInfo = [];

function Volunteer (volunteerData){
  this.orgName = volunteerData.orgName;
  this.role = volunteerData.role;
  this.body = volunteerData.body;
}

Volunteer.prototype.toHtml = function(){
  var handlebarsTemplateString = $('#handlebarsTemplate').html();
  var compiledArticle = Handlebars.compile(handlebarsTemplateString);
  return compiledArticle(this);
}

volunteerDataArray.forEach(function(volunteerDataObj){
  volunteerInfo.push(new Volunteer(volunteerDataObj));
});

volunteerInfo.forEach(function(org){
  $('#volunteer').append(org.toHtml());
});
