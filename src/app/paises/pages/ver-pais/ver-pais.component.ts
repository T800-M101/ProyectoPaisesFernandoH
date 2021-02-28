import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(private activatedRoute:ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {

    /////USANDO Observavles
    //  this.activatedRoute.params. // Se obtienen los parametros de la url
    //  subscribe( ({alpha}) => { // Aqui solo se desestructuo los params
    //    console.log(alpha);

    //    this.paisService.obtenerPaisPorAlpha(alpha)
    //    .subscribe(pais => {
    //      console.log(pais);
    //    })
    //  })

    ////// Usando rxjs
    this.activatedRoute.params
    .pipe(
        switchMap(({alpha}) => this.paisService.obtenerPaisPorAlpha(alpha)),
        tap(console.log)
    )
    .subscribe( pais => {
       this.pais = pais;
    });

  }

}
