import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
    selector: '[appOnHover]'
})
export class OnHoverDirective {

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.setScale('scale(1.05, 1.05)', '0.3s all');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setScale('scale(1, 1)', '0.2s all');
    }

    private setScale(val: string, duration: string) {
        this.renderer.setStyle(this.element.nativeElement, 'transform', val);
        this.renderer.setStyle(this.element.nativeElement, 'transition', duration);
    }
}
