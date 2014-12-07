package org.gleason.test
import groovyx.gpars.agent.Agent;

import java.util.concurrent.ConcurrentHashMap

import org.gleason.test.command.Question;

class QuestionService {
	private static key = 0;
	def notes = new ConcurrentHashMap<String, String>()
	def messageSource
	def get(id) {
		if(id == null){
			return notes.values()
		}
		else{
			return notes[id]?:"No user found"
		}
	}
	def create(obj){
		obj.key = key++
		obj.voteCount = 0
		//Validation needs to happen after adding the key
		obj.validate()
		if(!obj.hasErrors()){
			notes.put(obj.key.toString(), obj)
		}
		else{
			obj.errorMessages = obj?.errors?.allErrors?.collect{messageSource.getMessage(it,null)}
		}
		obj
	}
	def update(obj){
		if(!obj.hasErrors()){
			notes[obj.key.toString()] = obj
		}
		else{
			obj.errorMessages = obj?.errors?.allErrors?.collect{messageSource.getMessage(it,null)}
		}
		obj
	}
	def delete(id){
		notes.remove(String.valueOf(id));
	}
}