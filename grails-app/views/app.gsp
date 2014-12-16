<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Grails/Angular Demo App</title>
		<link rel="stylesheet" href="//daneden.github.io/animate.css/animate.min.css">
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular-route.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular-animate.min.js"></script>  
        <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/restangular/1.3.1/restangular.min.js"></script>
        <script type='application/javascript' src='${request.contextPath}/js/fastclick.js'></script>
	</head>
	<body ng-app="jg.ngGrails">
		<jg-ng-grails-app>
		</jg-ng-grails-app>
		<script src='//cdnjs.cloudflare.com/ajax/libs/textAngular/1.2.2/textAngular-sanitize.min.js'></script>
        <script src='//cdnjs.cloudflare.com/ajax/libs/textAngular/1.2.2/textAngular.min.js'></script>
        <g:javascript>
          window.appContext = '${request.contextPath}';
          if ('addEventListener' in document) {
              document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
          }
        </g:javascript>
        <script src="js/ng-grails.js"></script>
        
	</body>
</html>
