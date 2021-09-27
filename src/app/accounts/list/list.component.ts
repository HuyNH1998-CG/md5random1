import { Component, OnInit } from '@angular/core';
import {Account} from "../../model/account";
import {AccountsServiceService} from "../../service/accounts-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  accounts : Account[] = [];

  constructor(public accountservice:AccountsServiceService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.accounts = this.accountservice.accounts;
  }

  deleteAccount(id:number|undefined){
    this.accountservice.deleteAccount(id!);
    this.getData()
  }
}
