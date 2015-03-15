class UrlMappings {
	static mappings = {
		"/Note/$id?"(controller: "question", parseRequest: true) {
			action = [GET: "get", POST: "create", PUT: "update", DELETE: "delete"]
		}
		"/socket"(controller:"socket"){
			action=[GET:"index"]
		}
		"/"(view:"/app")
		"500"(view:'/error')
	}
}
