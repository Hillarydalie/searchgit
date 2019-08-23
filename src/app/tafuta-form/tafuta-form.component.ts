import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tafuta-form',
  templateUrl: './tafuta-form.component.html',
  styleUrls: ['./tafuta-form.component.css']
})
export class TafutaFormComponent implements OnInit {

    @Output() emitSearch = new EventEmitter<any>()

    gitSearch:string;
    
    constructor() { }

      search(){
          this.emitSearch.emit(this.gitSearch)
      }

    ngOnInit() {
    }

}
