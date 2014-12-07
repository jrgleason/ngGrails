package org.gleason.test

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(QuestionController)
@Mock([QuestionService])
class NoteControllerSpec extends Specification {
	QuestionService questionService
	
    def setup() {
		questionService = Mock()
		controller.questionService = questionService
    }

    def cleanup() {
    }

    def "Test a simple GET request"(){
      	when:
		  controller.get()
		then:
		  1 * questionService.get(_) >> []
	}
}
