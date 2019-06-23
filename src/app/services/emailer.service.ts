import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailerService {

  url: string = 'https://www.sergioroma.com/assets/mailer.php';

  constructor(private http: HttpClient) { }

  postIt(data: Object){
    this.http.post(this.url, data)
      .subscribe( response => console.log(response) );
  }

}
