import { Component, OnInit } from '@angular/core';
import{Quote} from'../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes =[
  new Quote (1,'The future belongs to those who believe in the beauty of their dreams','Dr Leskey Levy'),
  new Quote (2,'GO big or go big man','Me')
]

  constructor() { }

  ngOnInit() {
  }

}
