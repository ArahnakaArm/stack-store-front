import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CookieService } from '../services/cookie.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  age: number = 7;
  userProp;

  constructor(
    private utils: UtilsService,
    private cookie: CookieService
  ) { 
    this.userProp = new BehaviorSubject<string>('');
  }

  get getCurrentBot() {
    let bots = this.utils.decryptData(localStorage.getItem('_bot')) || [];
    let bot;
    if(Array.isArray(bots)) {
      bot = bots.find(t => t.partnerId === this.getUser().partnerId);
    } else {
      localStorage.setItem('_bot', this.utils.encryptData([]));
    }
    return bot;
  }

  setCurrentBot(data : any) {
    let bots = this.utils.decryptData(localStorage.getItem('_bot')) || [];
    let index = bots.findIndex((t: { partnerId: any; }) => t.partnerId === this.getUser().partnerId);
    if(index !== -1) {
      bots[index].bot = data;
    } else {
      bots.push({ 
        partnerId: this.getUser().partnerId,
        bot: data
      });
    }
    
    localStorage.setItem('_bot', this.utils.encryptData(bots));
  }

  removeCurrentBot() {
    let bots = this.utils.decryptData(localStorage.getItem('_bot')) || [];
    bots = bots.filter((t: { partnerId: any; }) => t.partnerId !== this.getUser().partnerId);
    localStorage.setItem('_bot', this.utils.encryptData(bots));
  }

  get getCurrentPage() {
    let pages = this.utils.decryptData(localStorage.getItem('_page')) || [];
    let page;
    if(Array.isArray(pages)) {
      page = pages.find(t => t.partnerId === this.getUser().partnerId);
    } else {
      localStorage.setItem('_page', this.utils.encryptData([]));
    }
    return page;
  }

  setCurrentPage(data: any) {
    let pages = this.utils.decryptData(localStorage.getItem('_page')) || [];
    let index = pages.findIndex((t: { partnerId: any; }) => t.partnerId === this.getUser().partnerId);
    if(index !== -1) {
      pages[index].page = data;
    } else {
      pages.push({ 
        partnerId: this.getUser().partnerId,
        page: data
      });
    }
    localStorage.setItem('_page', this.utils.encryptData(pages));
  }

  removeCurrentPage() {
    let pages = this.utils.decryptData(localStorage.getItem('_page')) || [];
    pages = pages.filter((t: { partnerId: any; }) => t.partnerId !== this.getUser().partnerId);
    localStorage.setItem('_page', this.utils.encryptData(pages));
  }
  
  getUser() {
    return this.utils.decryptData(this.cookie.getCookie('_info'));
  }

  async setUser(userInfo: any) {
/*     console.log(userInfo) */
    await this.cookie.setCookie('_info', this.utils.encryptData(userInfo), this.age);
    
  }

  setToken(credential: { access_token: any; }) {
    this.cookie.setCookie('_access_token', this.utils.encryptToken(credential.access_token), this.age);
  }

  login(credential: { access_token: any; }, rememberMe: any) {
    this.cookie.setCookie('_access_token', this.utils.encryptToken(credential.access_token), this.age);
    this.userProp = new BehaviorSubject<string>(this.utils.decryptData(this.cookie.getCookie('_info')));
    if(rememberMe) {
      localStorage.setItem('_remember_me', this.utils.encryptData(rememberMe));
    } else {
      localStorage.removeItem('_remember_me');
    }
  }

  

  signOut() {
    this.cookie.deleteCookie('_access_token');
    this.cookie.deleteCookie('_info');
  }
}