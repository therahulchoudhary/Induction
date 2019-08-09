import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../model/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../middlewares/questioncontrol.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers:[QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  dynamicform: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.dynamicform = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.dynamicform.value);
  }

}
