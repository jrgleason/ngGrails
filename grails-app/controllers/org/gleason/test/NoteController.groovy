package org.gleason.test
import org.gleason.test.command.Question;

import grails.converters.JSON
import groovy.json.JsonSlurper;

class NoteController {
	def noteService
	def index(){
		render(view:"app")
	}
	def get() {
		render noteService.get(params.id) as JSON
	}
	def update() {
		def obj = JSON.parse(request.reader.text);
		render noteService.update(obj) as JSON
	}
	def create(Question q){
		render noteService.create(q) as JSON
	}
	def delete(){
		def text = request.reader.text;
		def slurper = new JsonSlurper();
		def result = slurper.parseText(text)
		render noteService.delete(result.key)
	}
}