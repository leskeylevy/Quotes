import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote-by',
  templateUrl: './quote-by.component.html',
  styleUrls: ['./quote-by.component.css']
})
export class QuoteByComponent implements OnInit {

@Input()quote:Quote;
@Output() isComplete = new EventEmitter<boolean>();

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);





}
  constructor() { }

  ngOnInit() {
  }

}
