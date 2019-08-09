import { Component } from '@angular/core';
import { QuestionService} from './middlewares/question.service';
import { QuestionControlService } from './middlewares/questioncontrol.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService,QuestionControlService]
})
export class AppComponent {
  title = 'heross';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
