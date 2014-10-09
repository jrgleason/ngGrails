package org.gleason.test
import grails.converters.JSON

class NoteController {
	def noteService
	def index(){
		render(view:"app")
	}
    def get() { 
      log.debug("GET method "+ params.id)
	  render noteService.get(params.id)
    }
    def update() {
      log.debug("POST method "+ params.id)
	  render noteService.update(params.id, JSON.parse(request.reader.text))
    }
    def create(){
      log.debug("post method ")
	  render noteService.create(JSON.parse(request.reader.text))
    }
    def delete(){
      log.debug("Delete method "+ params.id)
	  render noteService.delete(params.id)
    }
}
