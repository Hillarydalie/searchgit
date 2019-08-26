import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tafuta-form',
  templateUrl: './tafuta-form.component.html',
  styleUrls: ['./tafuta-form.component.css']
})
export class TafutaFormComponent implements OnInit {

    @Output() emitSearch = new EventEmitter<any>()
    @Output() emitRepo = new EventEmitter<any>()

    gitSearch:string;
    gitRepo:string
    
    constructor() { }

    search(){
        this.emitSearch.emit(this.gitSearch)
    }

    searchDevRepo(){
        this.emitRepo.emit(this.gitRepo)
    }

    ngOnInit() {
    }

}
