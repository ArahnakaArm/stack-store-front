import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { UtilsService } from '../services/utils.service'


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  ip: any = '';
  ipVoucher = '';

  constructor(
    public http: Http,
    private router: Router,
    private utils: UtilsService
  ) { 
	this.ip = environment.ip ? environment.ip : '';

  }

  get(url, data?, filter?): Promise<any> {
		if (filter == undefined) {
			filter = '';
		}
		let params: URLSearchParams = new URLSearchParams();
		let id: string = '';

		for (let key in data) {
			let obj = key == 'filter' ? JSON.parse(data[key]) : data[key]
			if (typeof obj === 'object') {
				if ('id' in obj) {
					id = obj['id']
					delete obj['id']
					if (Object.keys(obj).length !== 0) {
						params.set(key, JSON.stringify(obj));
					}
				} else {
					params.set(key, data[key]);
				}
			} else {
				params.set(key, data[key]);
			}
		}

		let options = new RequestOptions();
		
		options.search = params;
		options.headers = this.utils.setHeaders();
		return this.http.get(this.ip + url + filter, options).pipe(map(response => {
			return response.json() || { resultCode: 50000, resultDesc: "No response from server" };
		})).toPromise();
	}
	getVoucher(url, data?, filter?): Promise<any> {
		if (filter == undefined) {
			filter = '';
		}
		let params: URLSearchParams = new URLSearchParams();
		let id: string = '';

		for (let key in data) {
			let obj = key == 'filter' ? JSON.parse(data[key]) : data[key]
			if (typeof obj === 'object') {
				if ('id' in obj) {
					id = obj['id']
					delete obj['id']
					if (Object.keys(obj).length !== 0) {
						params.set(key, JSON.stringify(obj));
					}
				} else {
					params.set(key, data[key]);
				}
			} else {
				params.set(key, data[key]);
			}
		}

		let options = new RequestOptions();
		
		options.search = params;
		options.headers = this.utils.setHeaders();
		return this.http.get(this.ipVoucher + url + filter, options).map(response => {
			return response.json() || { resultCode: 50000, resultDesc: "No response from server" };
		}).catch((error: Response | any) => {
			if (error.json().resultCode === "40101") {
				// this.logout();
				this.router.navigate(['/login'], { queryParams: { returnUrl: '/' } });
			}
			return Observable.throw(error.json());
		}).toPromise();
	}
	getmap(url, data?, filter?,header?): Promise<any> {
		if (filter == undefined) {
			filter = '';
		}
		let params: URLSearchParams = new URLSearchParams();
		let id: string = '';

		for (let key in data) {
			let obj = key == 'filter' ? JSON.parse(data[key]) : data[key]
			if (typeof obj === 'object') {
				if ('id' in obj) {
					id = obj['id']
					delete obj['id']
					if (Object.keys(obj).length !== 0) {
						params.set(key, JSON.stringify(obj));
					}
				} else {
					params.set(key, data[key]);
				}
			} else {
				params.set(key, data[key]);
			}
		}

		let options = new RequestOptions();
		
		options.search = params;
		options.headers = this.utils.setHeader(header);
		return this.http.get(this.ip + url + filter, options).map(response => {
			return response.json() || { resultCode: 50000, resultDesc: "No response from server" };
		}).catch((error: Response | any) => {
			if (error.json().resultCode === "40101") {
				// this.logout();
				//this.router.navigate(['/login'], { queryParams: { returnUrl: '/' } });
			}
			return Observable.throw(error.json());
		}).toPromise();
	}

	post(url, data) {
		let options = new RequestOptions();
		options.headers = this.utils.setHeaders();
		return this.http.post(this.ip + url, data, options).pipe(map(response => {
			return response.json() || { resultCode: 50000, resultDesc: "No response from server" };
		})).toPromise()
		.catch((error: Response | any)=>{
			return error.json()
		})
	}
	


	

	postInformation(url, data,header?) {
		let options = new RequestOptions();
		options.headers = this.utils.setHeaderInformation(header);

		return this.http.post(this.ip + url, data, options).map(response => {
			return response.json() || { resultCode: 50000, resultDesc: "No response from server" };
		}).catch((error: Response | any) => {
			return Observable.throw(error.json());
		}).toPromise();
	}

	patch(url, data) {
		let options = new RequestOptions();
		options.headers = this.utils.setHeaders();

		return this.http.patch(this.ip + url, data, options).pipe(map(response => {
			return response.json() || { resultCode: 50000, resultDesc: "No response from server" };
		})).toPromise();
	}

	delete(url, data?): Promise<any> {
		let options = new RequestOptions();
		options.headers = this.utils.setHeaders();

		return this.http.delete(this.ip + url, options).map(response => {
			return response.json() || { resultCode: 50000, resultDesc: "No response from server" };
		}).catch((error: Response | any) => {
			return Observable.throw(error.json());
		}).toPromise();
  }
}
