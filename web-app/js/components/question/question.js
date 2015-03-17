import {Component, Template, bootstrap, Foreach} from 'js/quickstart/angular2/angular2';
import {bind} from 'js/quickstart/angular2/di';

@Component({
  selector: 'question-app'
})
@Template({
  url: './components/todo/todo.html',
  directives: [Foreach]
})
class QuestionApp {
  test:any;
  constructor() {
    this.test = 10; 
  }
}
export function main(){
  bootstrap(QuestionApp);
}
