angular.module('templates-main', ['main/partials/test.jade']);

angular.module("main/partials/test.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/test.jade",
    "<h1>test</h1>");
}]);
