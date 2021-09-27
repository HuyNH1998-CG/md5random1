import {Component, OnInit} from '@angular/core';
import {AccountsServiceService} from "../../service/accounts-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(this.accountService.accounts.length + 1),
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    name: new FormControl('', Validators.required),
  })

  constructor(private accountService: AccountsServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  get theform(){
    return this.form.controls
  }

  create(){
    const account = this.form.value;
    this.accountService.register(account);
    this.router.navigate(['/account/list'])
  }
}
