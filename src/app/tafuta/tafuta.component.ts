import { Component, OnInit } from '@angular/core';
import {TafutaHttpService} from '../services/tafuta-http.service';
import {Gitsearch} from '../gitsearch';
 
@Component({
  selector: 'app-tafuta',
  templateUrl: './tafuta.component.html',
  styleUrls: ['./tafuta.component.css']
})

export class TafutaComponent implements OnInit {

    gitsearches:Gitsearch[];
    constructor(public tafutaHttpService:TafutaHttpService) { }

    ngOnInit() {
        // this.searchGithub(" ");
    }

    searchGithub(searchWord){
        this.tafutaHttpService.searchingGits(searchWord).then(
            ()=>{
                this.gitsearches=this.tafutaHttpService.gitsearches;
                // console.log(this.gitsearches)
            },
            (error)=>{
                console.log(error)
            }
        )
    }

}
