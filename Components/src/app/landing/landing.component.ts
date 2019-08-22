import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../middlewares/question.service'; 

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public domparser = new DOMParser();
  txt="<address>"+
"<street>Roble Ave</street>"+
"<mtfcc>S1400</mtfcc>"+
"<streetNumber>649</streetNumber>"+
"<lat>37.45127</lat>"+
"<lng>-122.18032</lng>"+
"<distance>0.04</distance>"+
"</address>";
  constructor(public router: Router,private qs:QuestionService) { }
  questions:any[];
  ngOnInit() {
    this.questions = this.qs.getQuestions();
    console.log(this.texttoxml(this.txt));
    console.log(this.xml2json(this.texttoxml(this.txt)));
  }
  navigateWithState(location: string) {
    this.router.navigateByUrl('/form', { state: { formstate: location } });
  }
  texttoxml(arg){
    return this.domparser.parseFromString(arg, 'text/xml');
  }
  xml2json(xml) {
    try {
      var obj = {};
      if (xml.children.length > 0) {
        for (var i = 0; i < xml.children.length; i++) {
          var item = xml.children.item(i);
          var nodeName = item.nodeName;
  
          if (typeof (obj[nodeName]) == "undefined") {
            obj[nodeName] = this.xml2json(item);
          } else {
            if (typeof (obj[nodeName].push) == "undefined") {
              var old = obj[nodeName];
  
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(this.xml2json(item));
          }
        }
      } else {
        obj = xml.textContent;
      }
      return obj;
    } catch (e) {
        console.log(e.message);
    }
  }
}
