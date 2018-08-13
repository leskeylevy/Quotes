import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes = [
    new Quote(1, 'The future belongs to those who believe in the beauty of their dreams', 'Dr Leskey Levy', 0, 0),
    new Quote(2, 'GO big or go big man', 'Me', 0, 0),
  ];



  deleteQuote(iscomplete, index) {
    if (iscomplete) {
      let toDelete = confirm(`are you sure you want to delete this amazing quote by ~ ${this.quotes[index].by}`)


      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    this.quotes.push(quote)
  }

  toogleDetails(index) {
    this.quotes[index].showBy = !this.quotes[index].showBy;
  }
  constructor() { }

  ngOnInit() {
  }

}
