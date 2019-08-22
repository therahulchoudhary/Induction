import { Component, OnInit, VERSION} from '@angular/core';
import { FileuploadService } from '../middlewares/fileupload.service';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  validator : boolean;
  constructor(private fuservice : FileuploadService){
  }
  onUpload(file: FileList){
    console.log(file);
    var ext = file[0].type;
    if(ext == 'image/png' || ext == 'image/jpg' || ext == 'image/jpeg'){
      this.validator = false;
      this.fuservice.basicUploadSingle(file[0]);
    }
    else{
      this.validator = true;
    }
  }
  ngOnInit(){
    
  }
}