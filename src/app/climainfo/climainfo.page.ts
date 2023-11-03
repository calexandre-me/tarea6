import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-climainfo',
  templateUrl: './climainfo.page.html',
  styleUrls: ['./climainfo.page.scss'],
})

export class ClimainfoPage implements OnInit, OnDestroy {

  constructor(
    private http: HttpClient
  ) { }

  time = new Date();
  intervalId:any = 0;
  
  climaN = '';
  climaImgUrl = '';

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.http.get<any>("http://api.weatherstack.com/current?access_key=3804460949ea921c65395d4186d1944b&query=18.735693,-70.162651&units=m")
    .subscribe(res => {
      if(res.current !== undefined){
        this.climaN = "El clima esta:" + res.current.weather_descriptions[0];
        this.climaImgUrl = res.current.weather_icons[0];
      }
      else{
        this.climaN = "Error: Clima API Bugging..."
        this.climaImgUrl = "/assets/images/bug.png";

      }
    })
    

  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
