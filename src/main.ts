import 'zone.js/dist/zone';
import { ApplicationRef, Component, ComponentFactoryResolver, ElementRef, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Highlight } from './app.highlight.directive';
import {SquareTransform} from './app.upper.pipe';
import {SupportComponent} from './app-support.component'

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, Highlight, SquareTransform],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" *ngIf=false href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <input ngModel #myname />
    <span>{{myname.value}}</span>
    <ul>
    <li  *ngFor="let item of createRange(10); let i=index" (click)="sayHello()" apphighlight>{{item}} hello {{i|square}}</li>
    </ul>
  `,
})
export class App {
  
  constructor(
  private elementRef: ElementRef,
	private appRef: ApplicationRef, 
	private viewContainerRef: ViewContainerRef,
	private injector: Injector)
  {
   viewContainerRef.createComponent(SupportComponent)
  }
  name = 'Angular';
  @ViewChild('myname') txtinput: any;
  createRange(number: any) {
    // return new Array(number);
    return new Array(number).fill(0).map((n, index) => index + 1);
  }
  sayHello() {
    console.log(this.txtinput.nativeElement.value);
  }
}

bootstrapApplication(App);
