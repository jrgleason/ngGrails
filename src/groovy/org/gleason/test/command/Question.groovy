package org.gleason.test.command

import org.codehaus.groovy.grails.validation.Validateable;

@Validateable
class Question {
	Integer key
	String text
	String desc
	Integer voteCount
//	static constraints = {
//		key unique: true
//		text blank: false
//		desc blank: false
//	}
}
