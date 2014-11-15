package org.gleason.demo

eventCompilestart = {
	def proc = "cmd /c grunt".execute()
	proc.consumeProcessOutput(System.out, System.err)
}
