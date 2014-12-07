package org.gleason.test
import org.gleason.test.command.Question;

import grails.converters.JSON
import groovy.json.JsonSlurper;

class QuestionController {
	def questionService
	def index(){
		render(view:"app")
	}
	def get() {
		render questionService.get(params.id) as JSON
	}
	def update() {
		def obj = (Question) JSON.parse(request.reader.text);
		render questionService.update(obj) as JSON
	}
	def create(Question q){
		render questionService.create(q) as JSON
	}
	def delete(){
		def text = request.reader.text;
		def slurper = new JsonSlurper();
		def result = slurper.parseText(text)
		render questionService.delete(result.key)
	}
}