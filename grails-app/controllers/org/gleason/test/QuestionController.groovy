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
	    // TODO: I would like this to be more like this, but it isn't working and I just need things working.
//		def obj = (Question)JSON.parse(request.reader.text);
		def obj = JSON.parse(request.reader.text);
		Question question = new Question();
		question.key = obj.key
		question.text = obj.text
		question.desc = obj.desc
		question.voteCount = obj.voteCount
		render questionService.update(question) as JSON
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