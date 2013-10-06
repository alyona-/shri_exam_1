'use strict';

function getRotate() {
  return (3 - 6*Math.random()).toFixed(2);
}

angular.module('shriExam1App.service', [])
  .factory('studentsService', function ($http) {
    return {
      dataFile: 'data/students.json',

      /**
       * Функция возвращает данные по всем студентам
       * @return {$q.defer().promise} Promise object with future data as js array
       */
      getStudents: function() {
        return $http.get(this.dataFile)
          .error(function() {
            console.log('Cannot get students\' data');
          })
          .then(function(response){
            var items = response.data;
            for (var k in items) {
              items[k].rotation_degree = getRotate();
            }
            return items;
          });
      }
    };

  })
  .factory('lectorsService', function ($http) {
    return {
      dataFile: 'data/lectors.json',

      /**
       * Функция возвращает данные по всем лекторам
       * @return {$q.defer().promise} Promise object with future data as js array
       */
      getLectors: function() {
        return $http.get(this.dataFile)
          .error(function() {
            console.log('Cannot get lectors\' data');
          })
          .then(function(response){
            var items = response.data.lectors;
            for (var k in items) {
              items[k].rotation_degree = getRotate();
            }
            return items;
          });
      }
    };
  });