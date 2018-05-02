import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PHPService } from '../php-service.service';
import { element } from 'protractor';
import { Http } from '@angular/http';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private php: PHPService, private router: Router) { }

  ngOnInit() {
  }
}
