import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tafuta-repo',
  templateUrl: './tafuta-repo.component.html',
  styleUrls: ['./tafuta-repo.component.css']
})
export class TafutaRepoComponent implements OnInit {

     @Output() emitRepo = new EventEmitter<any>()

    gitRepo:string



  constructor() { }

  searchDevRepo(){
        this.emitRepo.emit(this.gitRepo)
    }

  ngOnInit() {
  }

}
