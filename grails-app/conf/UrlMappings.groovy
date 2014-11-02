class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?(.$format)?" {
		   constraints { 
			   // apply constraints here
		   }
	    }

		"/Note/$id?"(controller: "note", parseRequest: true) {
			action = [GET: "get", POST: "create", PUT: "update", DELETE: "delete"]
		}
		"/"(view:"/app")
		"500"(view:'/error')
	}
}
