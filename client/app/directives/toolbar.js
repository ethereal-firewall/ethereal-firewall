// $('body').on('focus blur', '.toolbar .search', function() {
//   $('.toolbar .actions').fadeToggle();
// });
// $('body').on('click', '.heading .more', function() {
//   $('.heading ul').fadeToggle();
// });

angular.module('followApp')
.directive('toolbar', function () {
  function link(scope, element, attrs) {
  }
  return {
    link: link,
    restrict: 'E',
    templateUrl: 'app/templates/toolbar.html'
  };
});
