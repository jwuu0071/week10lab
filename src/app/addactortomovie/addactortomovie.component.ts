import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) {}

  moviesDB: any[] = [];
  actorsDB: any[] = [];
  fullName: string = '';
  title:string=""
  year:number=0
  bYear: number = 0;
  movieId: string = '';
  actorId: string='';


  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

  onSelectMovie(item:any){
    this.title = item.title
    this.year = item.year
    this.movieId = item._id

  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }


  onSelectActor(item:any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;

  }

  onAddActorToMovie() {
    this.dbService.addActorToMovie(this.actorId, this.movieId).subscribe((result) => {
      this.onGetMovies();
      this.onGetActors();
      this.router.navigate(["/listmovies"]);
    });
  }

  ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
  }


}
