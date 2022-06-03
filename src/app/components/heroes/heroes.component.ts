import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesServices: HeroesService,
               private router:Router  
              ) { }

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
    console.log(this.heroes);
  }

  verHeroe( index:number ){
    this.router.navigate( ['/heroe',index] );
  };

}


