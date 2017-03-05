import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../model/user.model';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    login(user: User) {
        var headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(user.username + ":" + user.password));
        headers.append('X-XSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
        return this.http.get('http://localhost:9000/user', { headers: headers, withCredentials: true });
    }

    logout() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-XSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
        return this.http.get('http://localhost:9000/logout', { headers: headers, withCredentials: true });
    }

    isAuthenticated() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-XSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
        return this.http.get('http://localhost:9000/isAuthenticated', { headers: headers, withCredentials: true });
    }

    getCookie(name: string) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

}