class UrlMappings {

	static mappings = {
	   // TODO Remove
//		"/$controller/$action?/$id?(.$format)?" {
//		   constraints { 
//			   // apply constraints here
//		   }
//	    }

		"/Note/$id?"(controller: "note", parseRequest: true) {
			action = [GET: "get", POST: "create", PUT: "update", DELETE: "delete"]
		}
		"/socket"(controller:"socket"){
			action=[GET:"index"]
		}
		"/"(view:"/app")
		"500"(view:'/error')
	}
}
