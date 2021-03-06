'use strict';

describe('Service: studentsService', function () {

  // load the service's module
  beforeEach(module('shriExam1App.service'));

  // instantiate service
  var studentsService,
      $httpBackend;

  beforeEach(inject(function ($injector) {
    studentsService = $injector.get('studentsService');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.expectGET('data/students.json').
          respond([{'first_name': 'Dima'}, {'first_name': 'Natasha'}]);

  }));

  it('should fulfill students array', function () {
    var result;
    studentsService.getStudents().then(function(data){
      result = data;
    });

    $httpBackend.flush();
    expect(result.length).toBeGreaterThan(1);
  });

  it('should add degree to objects', function() {
    var result;
    studentsService.getStudents().then(function(data){
      result = data;
    });

    $httpBackend.flush();
    expect(result[0]['rotation_degree']).toBeDefined();
  });

});