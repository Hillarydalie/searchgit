import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onclicks(){
    this.textDeco("line-through");
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }
}
