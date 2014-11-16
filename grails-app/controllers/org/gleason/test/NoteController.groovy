package org.gleason.test
import grails.converters.JSON
import groovy.json.JsonSlurper;

class NoteController {
	def noteService
	def index(){
		render(view:"app")
	}
	def get() {
		//      log.info("GET method "+ params.id)
		render noteService.get(params.id)
	}
	def update() {
		def obj = JSON.parse(request.reader.text);
		render noteService.update(obj)
	}
	def create(){
		//      log.info("post method ")
		render noteService.create(JSON.parse(request.reader.text))
	}
	def delete(){
		//      log.info("Delete method "+ params.id)
//		println "params.id ${request.reader.text}"
		def slurper = new JsonSlurper();
		def result = slurper.parseText(request.reader.text);
		render noteService.delete(result.key)
	}
}
