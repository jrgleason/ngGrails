package org.gleason.test.command

import grails.validation.Validateable

@Validateable
class Question {
	Integer key
	String text
	String desc
	Integer voteCount
	List<String> errorMessages
	static constraints = {
		key unique: true
		text blank: false
		desc blank: false
		errorMessages nullable: true
	}
}
