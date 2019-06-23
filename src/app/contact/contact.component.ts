import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;
  isSaved: string;

  constructor(
    private fb: FormBuilder, 
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      nameInput: ['', [Validators.required] ],
      emailInput: ['', [Validators.required, Validators.email] ],
      textInput: ['', [Validators.required] ],
    })
  }

  get nameInput(){
    return this.myForm.get('nameInput');
  }
  get emailInput(){
    return this.myForm.get('emailInput');
  }
  get textInput(){
    return this.myForm.get('textInput');
  }

  onSubmit(){

    this.db.collection('questions').add(this.myForm.value)
      .then( res => {  
        if(res){
          console.log( res )
        }
      } );
      
    this.btnReset()
  }

  btnReset(){
    this.myForm.reset();
  }

  cvDownload(toAnime: HTMLElement){
    //console.log(toAnime)
  }

}
