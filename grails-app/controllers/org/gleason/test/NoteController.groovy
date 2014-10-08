package org.gleason.test

class NoteController {
	def noteService
    def get() { 
      log.debug("GET method "+ params.id)
	  render noteService.get(params.id)
    }
    def update() {
      log.debug("POST method "+ params.id)
	  render noteService.update(params.id, request.reader.text)
    }
    def create(){
      log.debug("post method ")
	  render noteService.create(request.reader.text)
    }
    def delete(){
      log.debug("Delete method "+ params.id)
	  render noteService.delete(params.id)
    }
}
