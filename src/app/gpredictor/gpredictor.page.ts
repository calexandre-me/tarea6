import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gpredictor',
  templateUrl: './gpredictor.page.html',
  styleUrls: ['./gpredictor.page.scss'],
})
export class GpredictorPage implements OnInit {

  gender = '';
  male = false;
  female = false;
  error = false;

  constructor(
    private http: HttpClient
  ) { }

  nombre: string = '';

  gpredictar(){
    this.http.get<any>(`https://api.genderize.io/?name=${this.nombre}`)
    .subscribe(res => {
      this.gender = res.gender;
      console.log(this.gender);
      if(this.gender == 'male'){
        this.male = true;
        this.female = false;
        this.error = false;
      }
      if(this.gender == 'female'){
        this.female = true;
        this.male = false;
        this.error = false;
      }
      if(this.gender === null){
        this.error = true;
        this.male = false;
        this.female = false;
      }

    })
  }

  ngOnInit() {
  }

}
