import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[xxx]'
})
export class Xxx {
  constructor(
    element: ElementRef
  ){}
  
  @Output('updated') updated = new EventEmitter();
  
  @HostListener('focus',['$event']) onFocus($event){
    
  }
}
