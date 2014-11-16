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
		render noteService.get(params.id)
	}
	def update() {
		def obj = JSON.parse(request.reader.text);
		render noteService.update(obj)
	}
	def create(){
		render noteService.create(JSON.parse(request.reader.text))
	}
	def delete(Question q){
		def text = request.reader.text;
		println "The question has a text of ${q.text}"
		def slurper = new JsonSlurper();
		def result = slurper.parseText(text);
		render noteService.delete(result.key)
	}
}