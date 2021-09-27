import {Injectable} from '@angular/core';
import {Account} from "../model/account";

@Injectable({
  providedIn: 'root'
})
export class AccountsServiceService {

  accounts: Account[] = [{
    id: 1,
    username: 'aaaaaa',
    password: 'aaaaaaa',
    email: 'testthis@gmail.com',
    name: 'test'
  }]

  constructor() {
  }

  getAll() {
    return this.accounts;
  }

  register(account: Account) {
    this.accounts.push(account);
  }

  findById(id: number) {
    return this.accounts.find(account => account.id == id);
  }

  updateAccount(id: number, account: Account) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id == id) {
        this.accounts[i] = account;
        return
      }
    }
  }

  deleteAccount(id: number) {
    this.accounts = this.accounts.filter(accounts => {
      return accounts.id != id
    })
  }
}
