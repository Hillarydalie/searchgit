import { Component, OnInit } from '@angular/core';
import {TafutaHttpService} from '../services/tafuta-http.service';
import {Gitsearch} from '../users';
import {Gitrepo} from '../repositories';
 
@Component({
  selector: 'app-tafuta',
  templateUrl: './tafuta.component.html',
  styleUrls: ['./tafuta.component.css']
})

export class TafutaComponent implements OnInit {

    gitsearches:Gitsearch[];
    gitrepos: Gitrepo[];

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

    searchRepository(searchRepo){
        this.tafutaHttpService.searchingRepo(searchRepo).then(
            ()=>{
                this.gitrepos=this.tafutaHttpService.gitrepos;
            },
            (error)=>{
                console.log(error)
            }
        )
    }
}

