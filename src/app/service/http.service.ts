import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HttpService {
    constructor(private http: Http, private router: Router) { }

    doGet(url: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-XSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
        return this.http.get(url, { headers: headers , withCredentials: true });
    }

    doDelete(url: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-XSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
        return this.http.delete(url, { headers: headers , withCredentials: true });
    }

    doPost(url: string, postJSON: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-XSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
        return this.http.post(url, postJSON, { headers: headers , withCredentials: true });

    }

    doPut(url: string, putJSON: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-XSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
        return this.http.put(url, putJSON, { headers: headers , withCredentials: true });

    }

    getCookie(name: string) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
}