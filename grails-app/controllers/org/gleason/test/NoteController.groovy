package org.gleason.test
import grails.converters.JSON

class NoteController {
	def noteService
	def index(){
		render(view:"app")
	}
    def get() { 
      log.info("GET method "+ params.id)
	  render noteService.get(params.id)
    }
    def update() {
	  def obj = JSON.parse(request.reader.text);
	  render noteService.update(obj)
    }
    def create(){
      log.info("post method ")
	  render noteService.create(JSON.parse(request.reader.text))
    }
    def delete(){
      log.info("Delete method "+ params.id)
	  render noteService.delete(params.id)
    }
}
