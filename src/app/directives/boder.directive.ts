import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[border]'
})
export class BoderDirective implements OnInit{
  @Input() borderColor: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.borderStyle = 'solid';
    this.el.nativeElement.style.borderWidth = '1px';
    this.el.nativeElement.style.borderColor = this.borderColor;
    this.el.nativeElement.style.padding = '10px';
    this.el.nativeElement.style.marginBottom = '10px';
  }

}
