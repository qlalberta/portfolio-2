'use strict';

// class-04 handlebars goodness here

var volunteerOrgs = [];

function Volunteer (volunteerData){
  this.title = volunteerData.title;
  this.role = volunteerData.role;
  // TODO: Add org url
  // this.orgUrl = volunteerData.orgUrl;
  this.body = volunteerData.body;
}

Volunteer.prototype.toHtml = function(){
  var handlebarsTemplateString = $('#handlebarsTemplate').html();

  var compiledArticle = Handlebars.compile(handlebarsTemplateString);

  return compiledArticle(this);
}

volunteerDataArray.forEach(function(volunteerDataObj){
  volunteerOrgs.push(new Volunteer(volunteerDataObj));
});

volunteerOrgs.forEach(function(org){
  $('#volunteer').append(org.toHtml());
});
