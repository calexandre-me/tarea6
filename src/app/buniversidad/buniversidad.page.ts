import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-buniversidad',
  templateUrl: './buniversidad.page.html',
  styleUrls: ['./buniversidad.page.scss'],
})
export class BuniversidadPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  listItem = false;
  error = true;

  pais: string = '';
  nombre: any[] = [];
  url: any[] = [];
  domain: any[] = [];
  nb_univ: number = 0;
  bridge: any[] = [];

  buscaruniv(){
    
    this.nombre = [];
    this.url = [];
    this.domain = [];

    this.http.get<any>(`http://universities.hipolabs.com/search?country=${this.pais}`)
    .subscribe(res => {

      this.nb_univ = res.length;
      if(this.nb_univ != 0){

        this.listItem = true;
        this.error = false;

        for(let i=0; i<this.nb_univ; i++){
          this.bridge.push(i);
        }
  
        for(let i=0; i<res.length; i++){
          this.nombre.push(res[i]['name']);
          this.domain.push(res[i]["domains"][0]);
          this.url.push(res[i]["web_pages"][0]);
        }
      }
      else{
        this.listItem = false;
        this.error = true;
      }
      
    })
  }

  ngOnInit() {
  }

}
