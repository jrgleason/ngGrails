function WebComponentController($scope, $routeParams) {
	var socket = new SockJS(window.appContext+'/stomp');
    var client = Stomp.over(socket);
    $scope.messages = [];
    client.connect({}, function() {
       client.subscribe("/topic/hello", function(message) {
    	   console.log("Who is this");
    	   $scope.messages.push(message.body);
    	   $scope.$digest();
       });
    });
    $scope.send = function(){
    	client.send("/app/hello", {}, $scope.text);
    }
    // This is the code that would be used to integrate with WC (Chat?)
//    $scope.messages = [];
//    $scope.client = ngstomp(CONTEXT_ROOT+'/stomp');
//    $scope.client.connect("guest", "guest", function(){
//        $scope.client.subscribe("/topic/hello", function(message) {
//            $scope.messages.push(message.body);
//        });
};
app.controller('webComponentController', WebComponentController);