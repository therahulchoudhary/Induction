import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionComponent } from './question/question.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path : 'heros', component : HerosComponent },
  {path : '', component : LandingComponent },
  {path : 'form', component : FormComponent },
  {path : 'dynamicform', component : DynamicFormComponent },
  {path : 'questions', component : QuestionComponent },
  {path : 'fileupload', component : FileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
