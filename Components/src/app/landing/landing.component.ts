import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../middlewares/question.service'; 

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public router: Router,private qs:QuestionService) { }
  questions:any[];
  ngOnInit() {
    this.questions = this.qs.getQuestions();
  }
  navigateWithState(location: string) {
    this.router.navigateByUrl('/form', { state: { formstate: location } });
  }
}
