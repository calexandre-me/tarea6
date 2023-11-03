import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-epredictor',
  templateUrl: './epredictor.page.html',
  styleUrls: ['./epredictor.page.scss'],
})
export class EpredictorPage implements OnInit {
  
  ageL = 0;
  ok = true;
  error = false;
  
  constructor(
    private http: HttpClient
  ) { }

  nombre: string = '';

  epredecir(){
    this.http.get<any>(`https://api.agify.io/?name=${this.nombre}`)
    .subscribe(res => {
      this.ageL = res.age;
      console.log(this.ageL);

      Array.from(document.getElementsByClassName('rango')).forEach(el => {
        el.classList.remove('active');
      });

      if(this.ageL !== null){
        this.ok = true;

        if(this.ageL < 12){
          document.getElementById('r1')?.classList.add('active')
        }
        else if(this.ageL >= 12 && this.ageL <= 17){
          document.getElementById('r2')?.classList.add('active')
        }
        else if(this.ageL > 17 && this.ageL <= 60){
          document.getElementById('r3')?.classList.add('active')
        }
        else{
          document.getElementById('r4')?.classList.add('active')
        }
        this.error = false;
      }
      else{
        this.ok = false;
        this.error = true;
      }
    })
    
  }

  ngOnInit() {
  }

}
