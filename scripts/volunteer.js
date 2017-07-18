'use strict';

// references Code Fellows 301 Day-06 lecture code

function Volunteer (volunteerData){
  this.orgName = volunteerData.orgName;
  this.role = volunteerData.role;
  this.body = volunteerData.body;
}

Volunteer.all = [];

Volunteer.prototype.toHtml = function(){
  var handlebarsTemplateString = $('#handlebarsTemplate').html();
  let compiledVolunteerData = Handlebars.compile(handlebarsTemplateString);
  return compiledVolunteerData(this);
}

Volunteer.loadAll = function(volunteerData){
  volunteerData.forEach(function(el){Volunteer.all.push(new Volunteer(el))});
}

Volunteer.fetchAll = function () {
  if(localStorage.rawData){
    Volunteer.loadAll(JSON.parse(localStorage.rawData));
    // TODO: maybe a view thing here to init
  } else {
    $.getJSON('/data/volunteerData.json').then(function(volunteerData){
      localStorage.rawData = JSON.stringify(volunteerData);
      Volunteer.loadAll(volunteerData);
      // TODO: viewthing?
    })
  }
}
