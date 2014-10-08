angular.module('templates-main', ['main/partials/List/list.jade', 'main/partials/test.jade']);

angular.module("main/partials/List/list.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/List/list.jade",
    "<ul>\n" +
    "  <li ng-repeat=\"(key, note) in notes\">{{note.name}}</li>\n" +
    "</ul>");
}]);

angular.module("main/partials/test.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/test.jade",
    "<h1>test</h1>");
}]);
