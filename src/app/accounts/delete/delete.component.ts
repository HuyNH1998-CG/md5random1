import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountsServiceService} from "../../service/accounts-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id?: number;
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', Validators.required),
  })
  constructor(private accountService: AccountsServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(paramMap.get('id')!);
      const account = this.getAccount(this.id)!;
      this.form = new FormGroup({
        id: new FormControl(account.id),
        username: new FormControl(account.username, [Validators.required, Validators.minLength(6)]),
        password: new FormControl(account.password,[Validators.required, Validators.minLength(6)]),
        email: new FormControl(account.email,[Validators.required, Validators.email]),
        name: new FormControl(account.name, Validators.required),
      })
    })
  }

  ngOnInit(): void {
  }

  get theform(){
    return this.form.controls
  }

  getAccount(id: number) {
    return this.accountService.findById(id)
  }

  delete(){
    this.accountService.deleteAccount(this.id!);
    this.router.navigate(['/account/list'])
  }
}
