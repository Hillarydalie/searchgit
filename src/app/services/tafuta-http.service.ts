import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Gitsearch} from '../gitsearch';
import { Repo } from '../repositories';

@Injectable({
  providedIn: 'root'
})
export class TafutaHttpService {

    gitsearches:Gitsearch[]=[];
    repo: Repo[]=[];    

    constructor(private http:HttpClient) { 
        // this.repo = new Repo('', '', '');
    }

    searchingGits(gitSearch:string) {
        interface Hillary {
            login:string;
            html_url:string; 
            avatar_url:string;
            bio:any;
            name:any;
            location:any;
            followers: any;
            following: any;
            created_at : Date;
            public_repos: any;
            email:string;
            repos_url:any;
        }

        let searchEnding = "https://api.github.com/users/"+gitSearch+"?access_token="+environment.TafutaAPI;
        console.log(searchEnding);
        let promise = new Promise((resolve,reject)=>{
            this.gitsearches = [];
            this.http.get<Hillary>(searchEnding).toPromise().then(
                (results)=>{
                    this.gitsearches.push(results);
   
                    resolve()
                },
                (error)=>{
                    console.log(error)
                    reject()
                }
            )
        })
        return promise;
    }

    searchingRepo(gitSearch:string) {
        interface ApiKey {
            name: string;
            html_url: string;
            description: string;
        }

        let searchEnding = "https://api.github.com/users/"+gitSearch+"/repos?access_token="+environment.TafutaAPI;
        let promise = new Promise((resolve,reject)=>{
            this.repo = [];
            this.http.get<ApiKey>(searchEnding).toPromise().then(
                (results)=>{
                    this.repo.push(results);
   
                    resolve()
                },
                (error)=>{
                    console.log(error)
                    reject()
                }
            )
        })
        return promise;
    }

  //   getRepos(gitsearch) {

  //   interface ApiResponse {
  //     name: string;
  //     html_url: string;
  //     description: string;
  //   }

  //   // let searchEnding = "https://api.github.com/users/"+gitSearch+"?access_token="+environment.TafutaAPI;
  //   const promise = new Promise(((resolve, reject) => {
  //     this.http.get<ApiResponse>('https://api.github.com/users/' + this.gitsearches + '/repos?access_token=' + this.apiKey )
  //       .toPromise()
  //       .then(res => {
  //           console.log();
  //         this.repo = res;
  //   }, error => {

  //     reject(error);
  //   });
  // }));
  //   return promise;
  // }
}
