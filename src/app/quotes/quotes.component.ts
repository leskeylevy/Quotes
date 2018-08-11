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



deleteQuote(iscomplete,index){
  if(iscomplete){
    let toDelete=confirm('are you sure you want to delete ${this.quotes[index].name}')

    if(toDelete){
      this.quotes.splice(index,1)
    }
  }
}
 addNewQuote(quote){
   // let quoteLength = this.quotes.length;
   // quote.id=quoteLength=1;
   // quote.by = new Quote(quote.by)
   this.quotes.push(quote)
 }

 toogleDetails(index){
   this.quotes[index].showBy = !this.quotes[index].showBy;
 }
  constructor() { }

  ngOnInit() {
  }

}
