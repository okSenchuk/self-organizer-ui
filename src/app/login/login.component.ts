import { Component } from '@angular/core';
import { User } from '../model/user.model'
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login-form.html',
    providers: [LoginService]
})
export class LoginComponent {
    private user: User = {
        username: null,
        password: null
    };
    private error: string;

    constructor(private loginService: LoginService, private router: Router) {
    }

    submit() {
        if (!this.user.username || !this.user.password) {
            return;
        }
        this.loginService.login(this.user).subscribe(
            res => {
                if (res.status = 200) {
                    this.error = null;
                    location.reload();
                }
            },
            err => {
                var response = err.json();
                if (response.message) {
                    this.error = response.message;
                }
            });
    }
}

