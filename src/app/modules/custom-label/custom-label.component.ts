import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './custom-label.component.html',
  styleUrls: ['./custom-label.component.css']
})
export class CustomLabelComponent implements OnInit, OnDestroy {

  private name: String;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.name = params['name'];
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
