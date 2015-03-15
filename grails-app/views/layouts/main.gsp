<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="Grails"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="${assetPath(src: 'favicon.ico')}" type="image/x-icon">
		<link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
		<link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">
		<asset:stylesheet src="custom-bootstrap.css"/>
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
		<g:layoutHead/>
		<asset:stylesheet src="application.css"/>
	</head>
	<body  ng-app="jg.ngGrails">
		<g:layoutBody/>
                <asset:javascript src="jquery" />
                <asset:javascript src="spring-websocket" />
                <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
                <script type='application/javascript' src='${request.contextPath}/js/fastclick.js'></script>
                <script src="js/quickstart/dist/es6-shim.js"></script>
		<asset:javascript src="application.js"/>
                <script>
                 System.paths = {
                    'angular2/*':'./js/quickstart/angular2/*.js', // Angular
                 };
                 window.appContext = '${request.contextPath}';
                 if ('addEventListener' in document) {
                   document.addEventListener('DOMContentLoaded', function() {
                     FastClick.attach(document.body);
                   }, false);
                 }
               </script>
               <script src="js/ng-grails.js"></script>
	</body>
</html>
