import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Gitsearch} from '../gitsearch';

@Injectable({
  providedIn: 'root'
})
export class TafutaHttpService {

    gitsearches:Gitsearch[]=[];
    constructor(private http:HttpClient) { }

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
            // login:string;
            // avatar_url:string;
            // followers:number;
            // following:number;
            // public_repos:number;
            // repos_url:string;
        }

        let searchEnding = "https://api.github.com/users/"+gitSearch+"?access_token="+environment.TafutaAPI;
        console.log(searchEnding);
        let promise = new Promise((resolve,reject)=>{
            this.gitsearches = [];
            this.http.get<Hillary>(searchEnding).toPromise().then(
                (results)=>{
                    
                    this.gitsearches.push(results);
                    // this.gitsearches.push(result.login,result.avatar_url,result.followers,result.following,result.public_repos,result.repos_url)
                    console.log(results);
                    // this.gitsearches=[];
                    // for(let i=0; i<result.length; i++){
                        // let url = result["data"][i]["images"]["fixed-height"]["url"];
                        // let gitsearch = new Gitsearch(url);
                        // this.gitsearches.push(gitsearch);
                    // }
                    // console.log(this.gitsearches);
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

    // searchingRepo(gitSearchRepo:string) {
    //     interface Repos {
    //         name:string;
    //         description:string;
    //         html_url:string;

    //     }

    //     let searchEnding = "https://api.github.com/users/"+gitSearch+"?access_token="+environment.TafutaAPI;
    //     console.log(searchEnding);
    //     let promise = new Promise((resolve,reject)=>{
    //         this.gitsearhes = [];
    //         this.http.get<Hillary>(searchEnding).toPromise().then(
    //             (results)=>{
                    
    //                 this.gitsearches.push(results);
    //                 // this.gitsearches.push(result.login,result.avatar_url,result.followers,result.following,result.public_repos,result.repos_url)
    //                 console.log(results);
    //                 // this.gitsearches=[];
    //                 // for(let i=0; i<result.length; i++){
    //                     // let url = result["data"][i]["images"]["fixed-height"]["url"];
    //                     // let gitsearch = new Gitsearch(url);
    //                     // this.gitsearches.push(gitsearch);
    //                 // }
    //                 // console.log(this.gitsearches);
    //                 resolve()
    //             },
    //             (error)=>{
    //                 console.log(error)
    //                 reject()
    //             }
    //         )
    //     })
    //     return promise;
    // }
}
