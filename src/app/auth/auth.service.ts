import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

export interface UserInterface {
    id: number | string;
    password: string;
    role: 'admin' | 'client';
    gender: 'male' | 'female';
  }


@Injectable({
    providedIn:'root'
})
export class AuthService {
    private isAuthenticated = new BehaviorSubject<boolean>(false);
    public isAuthenticated$ = this.isAuthenticated.asObservable();
    url = 'http://localhost:3000/users';

    constructor(
        private http: HttpClient, 
        private router:Router
    ) {}

    login ( user: string, password: string ) {
        // return this.http.get<UserInterface[]>(`${this.url}?password=${password}&name=${user}`).subscribe( resp => {
        //     sessionStorage.setItem('user',resp[0].role);
        //     console.log(resp, );
        //     this.isAuthenticated.next(true);
        //     this.router.navigate(['./tableau'])
        // });
        const userInfo = {
            username : user, 
            password: password, 
            role:  user === "admin"? "admin": "client"
        };

        sessionStorage.setItem('user', JSON.stringify(userInfo));
        this.isAuthenticated.next(true);
        this.router.navigate(['./tableau'])
    }

    register ( user: string, password: string ) {
        return this.http.get<UserInterface[]>('http://localhost:3000/users/1').subscribe( resp => {
            sessionStorage.setItem('user',resp[0].role);
            this.isAuthenticated.next(true);
            this.router.navigate(['./tableau'])
        });
    }


    logout () {
        sessionStorage.removeItem('user');
        this.isAuthenticated.next(false);
        this.router.navigate(['./tableau'])
    }


    isLoggedIn(): boolean {
        return !!sessionStorage.getItem('user');
    }

    profile () {
        if ( this.isLoggedIn() ) return JSON.parse(sessionStorage?.getItem('user') ?? '');
        else return this.router.navigate(['/auth']);
    }
}