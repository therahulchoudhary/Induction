import { Injectable } from '@angular/core';

import {HttpClientModule,HttpHeaders, HttpClient, HttpRequest,HttpErrorResponse, HttpResponse, HttpEventType} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map,catchError} from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
    // 'Accept': 'application/x-www-form-urlencoded'
  })
};
@Injectable({
  providedIn: 'root'
})

export class FileuploadService {
  percentDone: number;
  uploadSuccess: boolean;

  constructor(
    private http: HttpClient,
    ) { }
  
  upload(file: File[]){
    //pick from one of the 4 styles of file uploads below
    this.basicUpload(file);
  }

  basicUpload(files: File[]){
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))
    this.http.post('http://localhost:3000/fileupload', formData)
      .subscribe(event => {  
        console.log('done')
      })
  }
  basicUploadSingle(file: File){    
    const formData: FormData = new FormData();
    formData.append('filekey', file, file.name);
    // return this.http.post('http://localhost:3000/fileupload', formData,httpOptions).pipe(
    //   map((res: any) => {
    //   return (res);
    //   }),
    //   catchError(err => {
    //   return this.handleError;
    //   })
    //   )
    this.http.post('http://localhost:3000/fileupload', formData)
      .subscribe(event => {  
        console.log('done')
      })
  }
  
  uploadAndProgress(files: File[]){
    console.log(files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file',f))
    
    this.http.post('https://file.io', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }
  uploadAndProgressSingle(file: File){    
    this.http.post('https://file.io', file, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
