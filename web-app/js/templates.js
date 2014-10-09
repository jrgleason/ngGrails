angular.module('templates-main', ['main/partials/List/list.jade', 'main/partials/app.jade', 'main/partials/hi.jade', 'main/partials/test.jade', 'main/partials/view.jade']);

angular.module("main/partials/List/list.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/List/list.jade",
    "<ul>\n" +
    "  <li ng-repeat=\"(key, note) in notes\">{{note.name}}</li>\n" +
    "</ul>");
}]);

angular.module("main/partials/app.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/app.jade",
    "<div ng-controller=\"mainController\">\n" +
    "  <nav role=\"search\" class=\"navbar navbar-static-top\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"navbar-header\"><a ng-click=\"mainCtrl.go('')\" class=\"navbar-brand\"> <span class=\"glyphicon glyphicon-home\"></span></a></div>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "  <div data-ng-view=\"data-ng-view\" ng-class=\"pageClass\" class=\"page\"></div>\n" +
    "</div>");
}]);

angular.module("main/partials/hi.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/hi.jade",
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <h1>Hello World!</h1>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("main/partials/test.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/test.jade",
    "<h1>test</h1>");
}]);

angular.module("main/partials/view.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/view.jade",
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">Users</div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <jg-note-list notes=\"noteCtrl.notes\"></jg-note-list>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer\">\n" +
    "      <button ng-click=\"mainCtrl.go('hi')\">Test</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
