angular.module('templates-main', ['main/partials/add.jade', 'main/partials/app.jade', 'main/partials/list/list.jade', 'main/partials/question/addQuestion.jade', 'main/partials/test.jade', 'main/partials/view.jade']);

angular.module("main/partials/add.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/add.jade",
    "<div class=\"container-fluid\">\n" +
    "  <jg-add-question></jg-add-question>\n" +
    "</div>");
}]);

angular.module("main/partials/app.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/app.jade",
    "<div ng-controller=\"mainController\">\n" +
    "  <nav role=\"search\" class=\"navbar navbar-static-top\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"pull-right\"><a ng-click=\"mainCtrl.go('')\" class=\"navbar-brand\"> <span class=\"glyphicon glyphicon-home\"></span></a><a ng-click=\"mainCtrl.go('/add')\" class=\"navbar-brand\"><i class=\"fa fa-plus-circle\"></i></a><a href=\"https://github.com/jrgleason/ngGrails\" class=\"navbar-brand\"><i class=\"fa fa-github-alt\"></i></a></div>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "  <div data-ng-view=\"data-ng-view\" ng-class=\"pageClass\" class=\"page\"></div>\n" +
    "</div>");
}]);

angular.module("main/partials/list/list.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/list/list.jade",
    "<ul>\n" +
    "  <li ng-repeat=\"(key, question) in questionCtrl.questions\"> \n" +
    "    <h3>{{question.text}}</h3>\n" +
    "    <p>{{question.desc}} </p><a> <i ng-click=\"questionCtrl.voteDown({{key}})\" class=\"fa fa-caret-down\"></i></a><a> <i ng-click=\"questionCtrl.voteUp({{key}})\" class=\"fa fa-caret-up\"></i></a>\n" +
    "    <input type=\"hidden\" value=\"{{question.key}}\"/>\n" +
    "  </li>\n" +
    "</ul>");
}]);

angular.module("main/partials/question/addQuestion.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/partials/question/addQuestion.jade",
    "<div class=\"add-note\">\n" +
    "  <div class=\"row\">\n" +
    "    <h3 class=\"col-xs-offset-1\">Add A Question</h3>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "      <label for=\"questionText\" class=\"col-xs-5\">Question Text</label>\n" +
    "      <input name=\"questionText\" type=\"text\" ng-model=\"questionCtrl.newQuestion.text\" class=\"col-xs-7\"/>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6\">\n" +
    "      <label for=\"questionDesc\" class=\"col-xs-5\">Question Description</label>\n" +
    "      <input name=\"questionDesc\" type=\"text\" ng-model=\"questionCtrl.newQuestion.desc\" class=\"col-xs-7\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row pad-top\"> \n" +
    "    <div class=\"col-sm-2 col-sm-offset-5\">\n" +
    "      <button ng-click=\"questionCtrl.add()\" class=\"col-xs-12 btn-primary\">Add Note</button>\n" +
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
    "<div class=\"container-fluid panel-area\">\n" +
    "  <jg-note-list notes=\"noteCtrl.notes\"></jg-note-list>\n" +
    "</div>");
}]);
