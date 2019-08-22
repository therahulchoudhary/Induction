import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './middlewares/question.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileuploadService } from './middlewares/fileupload.service';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    LandingComponent,
    FormComponent,
    DynamicFormComponent,
    QuestionComponent,
    FileUploadComponent,
    DatatableComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule
  ],
  providers: [QuestionService,FileuploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
