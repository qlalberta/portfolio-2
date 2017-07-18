'use strict';

// class-03 jQuery goodness here

var projects = [];

// TODO: js architecture
function Project(projectData){
  this.title = projectData.title;
  this.image = projectData.image;
  this.body = projectData.body;
}

Project.prototype.toHtml = function (){
  var $newProject = $('article.project-template').clone();
  $newProject.attr('class','project');
  $newProject.find('.project-title').text(this.title);
  $newProject.find('.project-image').attr('src', this.image);
  $newProject.find('.project-body').html(this.body);
  return $newProject;
}

// TODO: fetchAll

projectDataArray.forEach(function(projectDataObj){
  projects.push(new Project(projectDataObj));
});

projects.forEach(function(toRender){
  $('#projects').append(toRender.toHtml());
});
