import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients-component.html',
  styleUrls: ['./clients-component.css']
})

export class ClientsComponent implements OnInit {

  private LOGO = require("../assets/img/logo.png");
  
  private VIVO = require("../assets/img/VIVO.png");
  private TIM = require("../assets/img/TIM.png");
  private CLARO = require("../assets/img/CLARO.png");
  private OI = require("../assets/img/OI.png");

  constructor() { }

  ngOnInit() {
    
  }

}
