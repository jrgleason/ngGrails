package org.gleason.test

import grails.transaction.Transactional
import grails.converters.JSON
import groovyx.gpars.agent.Agent;
import java.util.concurrent.ConcurrentHashMap

@Transactional
class NoteService {
	private static key = 0;
	private notes = new ConcurrentHashMap<String, String>()
	def get(id) {
		log.debug "Getting "+id
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
		notes.put(obj.key.toString(), obj)
		"Created"
	}
	def update(id, obj){
		log.debug "Updating"
		notes[id] = obj
		"Updated"
	}
	def delete(id){
		log.debug "Deleteing"
		notes.remove(id)
		"Deleted"
	}
}
