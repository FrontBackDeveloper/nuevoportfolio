import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
}
