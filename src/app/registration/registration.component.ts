import { Component } from '@angular/core';
import { Registration } from '../model/user.model'
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service'

@Component({
    selector: 'registration',
    templateUrl: 'app/registration/registration-form.html',
    providers: [HttpService]
})
export class RegistrationComponent {
    private registration: Registration = {
        email: null,
        firstName: null,
        lastName: null,
        password: null,
        repeatPassword: null
    };
    private error: string;
    private url: string = "http://localhost:9000/register";

    constructor(private httpService: HttpService, private router: Router) {
    }

    submit() {
        if (!this.registration.email || !this.registration.password || !this.registration.firstName
        || !this.registration.lastName || !this.registration.repeatPassword) {
            return;
        }
        this.httpService.doPost(this.url,JSON.stringify(this.registration)).subscribe(
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

