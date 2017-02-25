import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from '../model/user.model';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    login(user: User) {
        var headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(user.username + ":" + user.password));
        return this.http.get('http://localhost:9000/user', { headers: headers });
    }
    
    logout(){
        return this.http.post('http://localhost:9000/logout', "");
    }
    
    isAuthenticated(){
        return this.http.get('http://localhost:9000/isAuthenticated');
    }
    
    getPrincipalOffice(){
        return this.http.get('http://localhost:9000/principal/office');
    }

}