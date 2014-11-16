package org.gleason.test

import grails.transaction.Transactional
import grails.converters.JSON
import groovyx.gpars.agent.Agent;
import java.util.concurrent.ConcurrentHashMap

@Transactional
class NoteService {
	private static key = 0;
	def notes = new ConcurrentHashMap<String, String>()
	def get(id) {
//		log.debug "Getting "+id
		if(id == null){
			return notes.values() as JSON
		}
		else{
			return notes[id]?:"No user found"
		}
	}
	def create(obj){
		log.debug "Creating"
		obj.key = key++
		obj.voteCount = 0
		notes.put(obj.key.toString(), obj)
		"Created"
	}
	def update(obj){
		log.debug "Updating "+ (obj as JSON)
		notes[obj.key.toString()] = obj
		"Updated"
	}
	def delete(id){
		notes.remove(String.valueOf(id));
	}
}