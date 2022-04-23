import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';


import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';

import { CookieService } from '../services/cookie.service';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private cookie: CookieService,
   
  ) { }

  // FOR SERVICE REQUEST
  setHeaders() {
    let token = this.cookie.getCookie('_access_token') ? this.decryptToken(this.cookie.getCookie('_access_token')) : '';
		return new Headers({
			"Access-Control-Allow-Credentials": true,
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "authorization, timezone ,Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name",
      "Access-Control-Allow-Methods": "POST,GET,PUT,PATCH,DELETE,OPTIONS",
      "x-tid": "WAD-200103fJuf9wmfu4",
      "x-session-id": "WwkrgesyEul6mmTcj4f6Oi",
      "Authorization": `Bearer ${token}`
		})
  }

  setHeader(header: any) {
    let token = this.cookie.getCookie('_access_token') ? this.decryptToken(this.cookie.getCookie('_access_token')) : '';
		return new Headers({
			"Access-Control-Allow-Credentials": true,
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "authorization, timezone ,Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name",
      "Access-Control-Allow-Methods": "POST,GET,PUT,PATCH,DELETE,OPTIONS",
      "x-tid": "WAD-200103fJuf9wmfu4",
      "x-session-id": "WwkrgesyEul6mmTcj4f6Oi",
     // "Authorization": `Bearer ${token}`,
      "x-api-key" : header
		})
  }

  setHeaderInformation(header: any) {
    let token = this.cookie.getCookie('_access_token') ? this.decryptToken(this.cookie.getCookie('_access_token')) : '';
		return new Headers({
			"Access-Control-Allow-Credentials": true,
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "authorization, timezone ,Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name",
      "Access-Control-Allow-Methods": "POST,GET,PUT,PATCH,DELETE,OPTIONS",
      "x-tid": "WAD-200103fJuf9wmfu4",
      "x-session-id": "WwkrgesyEul6mmTcj4f6Oi",
      "x-api-key" : header
		})
  }

  
  buildSearch(objSearch: { [x: string]: any; }) {
		let textSearch: string = '';
    for (let item in objSearch) {
      if (objSearch[item] !== '' && objSearch[item] !== null && objSearch[item] !== undefined && typeof objSearch[item] !== undefined) {
        textSearch = `${textSearch}${item}=${objSearch[item]}&`;
      }
    }
		textSearch = textSearch.substring(0, textSearch.length - 1);
		return textSearch != '' ? `?${textSearch}` : '';
  }
  // END FOR SERVICE REQUEST

  encryptData(data :any) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), environment.secretKey).toString();
    } catch (e) {
      return '';
    }
  }

  decryptData(ciphertext : any) {
    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, environment.secretKey);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (e) {
      return false;
    }
  }

  encryptToken(token : any ) {
    try {
      return CryptoJS.AES.encrypt(token, environment.secretKey).toString();
    } catch (e) {
      return '';
    }
  }

  decryptToken(ciphertext: string ) {
    try {
      var bytes = CryptoJS.AES.decrypt(ciphertext, environment.secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (e) {
      return '';
    }
  }

  buildStringCategory(data: { firstLevelId: { firstLevelName: any; }; secondLevelId: { secondLevelName: any; }; thirdLevelId: { thirdLevelName: any; }; }) {
    let firstLevelName = data.firstLevelId ? data.firstLevelId.firstLevelName : null;
    let secondLevelName = data.secondLevelId ? data.secondLevelId.secondLevelName : null;
    let thirdLevelName = data.thirdLevelId ? data.thirdLevelId.thirdLevelName : null;
    let arrayCategory = [firstLevelName, secondLevelName, thirdLevelName];
    arrayCategory = arrayCategory.filter(t => t !== null)
    return arrayCategory.join(' / ');
  }

  base64ToBlob(base64Image: string): Blob {
    const split = base64Image.split(',');
    const type = split[0].replace('data:', '').replace(';base64', '');
    const byteString = atob(split[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type});
  }

  blobToFile(blob: BlobPart, type: any) {
    const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)
    return new File([blob], generateRandomString(), { type })
  }

  validateFile(fileEvent: any) {
    const file = fileEvent.target.files[0];
    let invalid = false;
    if(!['image/jpeg', 'image/png'].includes(file.type) || file.size / 1024 / 1024 > 5) {
      invalid = true;
    }
    return invalid;
  }

  deleteValueIsNull(data: { [x: string]: any; }) {
    Object.keys(data).forEach((k) => (!data[k] && data[k] !== undefined) && delete data[k]);
    return data;
  }

  formatDate(date: moment.MomentInput, format: string | undefined) {
    return moment(date).format(format);
  }

  compareDate(date: moment.MomentInput, toDate: moment.MomentInput) {
    return moment(moment(date).format('YYYY-MM-DD')).isSame(moment(toDate).format('YYYY-MM-DD'));
  }


  capitalize(string: string) {
		let splitString = string.split(' ');
		let newString = '';
		for (let currentString of splitString) {
			newString = newString + ' ' + currentString.charAt(0).toUpperCase() + currentString.slice(1).toLowerCase()
		}

		return newString.slice(1);
  }

  dateTimeNoti(date: moment.MomentInput) {
    let string;
    if(moment(moment(date).format('YYYY-MM-DD')).isBefore(moment().format('YYYY-MM-DD'))) {
      string = moment(date).format('MMM DD');
    } else {
      string = moment(date).format('LT');
    }
    return string;
  }

}
