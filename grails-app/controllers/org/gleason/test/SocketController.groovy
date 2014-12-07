package org.gleason.test

import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo

class SocketController {
	def index(){
		
	}
	@MessageMapping("/hello")
	@SendTo("/topic/hello")
	protected String hello(String world) {
	   return "hello from controller, ${world}!"
	}
}
