package org.gleason.test

import grails.transaction.Transactional
import grails.converters.JSON
import groovyx.gpars.agent.Agent;

@Transactional
class NoteService {
	private static key = 0;
	private final noteState = new Agent<Map<String, Object>>([:])
	def get(id) {
		log.debug("We are inside the get "+id)
		def noteList = noteState.val
		if(id == null){
			return noteList as JSON
		}
		else{
			log.debug noteList as JSON
			noteList.each{
				key, value -> log.debug "Is ${id} ${id.class} equal to ${key} ${key.class} ${id.equals(key)}";
			}
			return noteList[id]?:"No user found"
		}
	}
	def create(obj){
		log.debug "Creating service"
		noteState << { it[(key++).toString()] = obj }
		log.debug "Return Creating service"
		"Created"
	}
	def update(id, obj){
		noteState << { it[id] = obj }
		"Updated"
	}
	def delete(id){
		log.debug "We are inside the remove"
		noteState << { it.remove(id) }
		"Deleted"
	}
}
