import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
   button {
     margin-right: 0.313rem;
   }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';
  termino:string = "";
  hayError: boolean = false;
  paises:Country[] =[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    if(region === this.regionActiva) return;
    this.regionActiva = region;
    this.paises = [];
    

    //TODO: hacer el llamado al servicio
    this.paisService.obtenerPaisesPorRegion(this.regionActiva)
    .subscribe( region => {
      this.paises = region;
    })
  }

  getClassCSS(region:string):string{
    return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
