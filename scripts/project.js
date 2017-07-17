'use strict';

var projects = [];

// TODO: js architecture
function Project(projectData){
  this.title = projectData.title;
  this.image = projectData.image;
  this.body = projectData.body;
}

Project.prototype.toHtml = function (){
  var $newProject = $('article.project').clone();
  $newProject.find('.project-title').text(this.title);
  $newProject.find('.project-image').attr('src', this.image);
  $newProject.find('.project-body').html(this.body);

  return $newProject;
}

projectDataArray.forEach(function(projectDataObj){
  projects.push(new Project(projectDataObj));
});

projects.forEach(function(toRender){
  $('#projects').append(toRender.toHtml());
});
