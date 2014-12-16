<!DOCTYPE html>
<html>
   <head>
      <meta name="layout" content="main"/>

      
   </head>
   <body>
      <button id="helloButton">hello</button>
      <div id="helloDiv"></div>
      <script type="text/javascript">
          $(function() {
            var socket = new SockJS("${createLink(uri: '/stomp')}");
            var client = Stomp.over(socket);

            client.connect({}, function() {
               client.subscribe("/topic/hello", function(message) {
                  $("#helloDiv").append(JSON.parse(message.body));
               });
            });

            $("#helloButton").click(function() {
               client.send("/app/hello", {}, JSON.stringify("world"));
            });
         });
      </script>
   </body>
</html>