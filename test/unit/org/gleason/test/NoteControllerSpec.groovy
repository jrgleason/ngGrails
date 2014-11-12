package org.gleason.test

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(NoteController)
@Mock([NoteService])
class NoteControllerSpec extends Specification {
	NoteService noteService
	
    def setup() {
		noteService = Mock()
		controller.noteService = noteService
    }

    def cleanup() {
    }

    def "Test a simple GET request"(){
      	when:
		  controller.get()
		then:
		  1 * noteService.get(_) >> []
	}
}
