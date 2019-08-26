import { Component, OnInit } from '@angular/core';
import { Observable , of } from 'rxjs';
import { map , first } from 'rxjs/operators';

const myObservable = of(1,2,3);
  const myobserver ={
    next: x => console.log("Here the value :"+x),
    error: msg => console.log("here is error"+msg),
    complete:()=> console.log("First Complete function")
  } 
  myObservable.subscribe(myobserver);
  const observable = new Observable(function subscribe(subscriber){
    try {
      subscriber.next(1);
      subscriber.next('he');
      setInterval(()=>{
        subscriber.next('hi'); 
      }),1000;
      subscriber.next(3);
      subscriber.complete();
    }catch (err) {
      subscriber.error();
    }
  });

  const subscription = observable.subscribe(x =>console.log(x));
  map(x => (x)*(x))(of(1,2,3)).subscribe((v)=>console.log(`Squared value : ${v}`));
  first()(of(1,2,3)).subscribe((w)=>console.log(`first value of observable is : ${w}`));
  map(x => x.toUpperCase())(of('a','b','c')).subscribe((v)=>console.log(`value :  ${v}`));

  function multicastSequenceSubscriber(){
    const seq = [1,2,3];
    const observers = [];
    let timeoutId;
    return(observer) => {
      observers.push(observer);
      if(observers.length===1){
        timeoutId = doSequence({
          next(val){
            observers.forEach(obs =>obs.next(val));
          },
          complete(){
            observers.slice(0).forEach(obs =>obs.complete());
          }
        },seq,0);
      }
      return {
        unsubscribe() {
          observers.slice(observers.indexOf(observer),1);
          if(observers.length==0){
            clearTimeout(timeoutId);
          }
        }
      }
    } 
  }
  function doSequence(observer,arr,index) {
    return setTimeout(()=>{
      observer.next(arr[index]);
      if(index ===arr.length-1){
        observer.complete();
      }
      else {
        doSequence(observer,arr,++index);
      }
    },1000);
  }
  const multicastSequence = new Observable(multicastSequenceSubscriber());
  multicastSequence.subscribe({
    next(num) {console.log("1st subscriber value: "+num);},
    complete(){console.log("completely done");},
    error(msg) {console.log("Error Message: "+msg)}
  })
  setTimeout(()=>{
    multicastSequence.subscribe({
      next(num) {console.log("2nd subscriber value: "+num);},
      complete(){console.log("2nd completely done");},
      error(msg) {console.log("Error Message: "+msg)}
    });
  }, 1500);

@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrls: ['./rxjs-observable.component.css']
})
export class RxjsObservableComponent implements OnInit {
  time = new Observable(observer => {
    setInterval(() => observer.next(new Date().toString()), 100)
  });
  constructor() { }

  ngOnInit() {
  }

}
