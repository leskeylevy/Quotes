import { Component, OnInit,Input } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote-by',
  templateUrl: './quote-by.component.html',
  styleUrls: ['./quote-by.component.css']
})
export class QuoteByComponent implements OnInit {

@Input()quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}
