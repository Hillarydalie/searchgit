import { Component, OnInit } from '@angular/core';
import {TafutaHttpService} from '../services/tafuta-http.service';
import {Gitsearch} from '../users';
import { Repo } from '../repositories';
 
@Component({
  selector: 'app-tafuta',
  templateUrl: './tafuta.component.html',
  styleUrls: ['./tafuta.component.css']
})

export class TafutaComponent implements OnInit {

    gitsearches:Gitsearch[];
    repo: Repo[];

    constructor(public tafutaHttpService:TafutaHttpService) { }

    ngOnInit() {
       
    }

    searchGithub(searchWord){
        this.tafutaHttpService.searchingGits(searchWord).then(
            ()=>{
                this.gitsearches=this.tafutaHttpService.gitsearches;
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    searchRepository(searchWord){
        this.tafutaHttpService.searchingRepo(searchWord).then(
            ()=>{
                this.repo=this.tafutaHttpService.repo;
            },
            (error)=>{
                console.log(error)
            }
        )
    }
}

