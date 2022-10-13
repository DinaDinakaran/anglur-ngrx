import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecCount, IncCount, ResCount } from './action';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{myCount$ | async}}</h1>
  <button (click)="incrment()">+</button>
  <button (click)="decement()">-</button>
  <button (click)="reset()">reset</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'state-manage';

  myCount$ : Observable<any>;
  constructor(private store : Store<{count :number}>){
    this.myCount$ = store.select("count")
  }


  incrment(){
  this.store.dispatch(new IncCount() )
  }
  decement(){
    this.store.dispatch(new DecCount() )
  }
  reset(){
    this.store.dispatch(new ResCount() )
  }
}
