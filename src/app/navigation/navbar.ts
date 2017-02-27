import { Component } from '@angular/core';
import { Route, RouterLink, RouterOutlet, Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
    selector: 'navbar',
    templateUrl: 'app/navigation/navbar.html',
    providers: [LoginService]
})
export class Navbar {
    public login: string = 'false';
    public isAuthenticated: boolean;
    public isAdmin: boolean;
    public isUser: boolean;
    public office: string;
    public firstName: string;
    public lastName: string;


    constructor(private router: Router, private loginService: LoginService) {
        this.isAuth();
    }

    logout() {
        this.loginService.logout().subscribe(
            res => {
                if (res.status = 200) {
                    this.isAuthenticated = false;
                    this.router.navigateByUrl('/');
                }
            });
    }

    isAuth() {
        this.loginService.isAuthenticated().subscribe(res => {
            if (res.status = 200) {
                var response = res.json();
                this.isAuthenticated = response.isAuthenticated;
                if (!this.isAuthenticated) {
                    this.router.navigateByUrl('/login');
                }
                this.isAdmin = (response.role == 'ROLE_ADMIN');
                this.isUser = (response.role == 'ROLE_USER');
                this.firstName = response.firstName;
                this.lastName = response.lastName;
            }
        });
    }

}