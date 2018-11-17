import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        const shadow = '0 6px 12px 0 rgba(0, 0, 0, 0.4), 0 10px 30px 0 rgba(0, 0, 0, 0.2)';
        this.setScale('scale(1.01, 1.01)', shadow, '0.3s all', '1');
    }

    @HostListener('mouseleave') onMouseLeave() {
        const shadow = '0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)';
        this.setScale('scale(1, 1)', shadow, '0.2s all', '0');
    }

    private setScale(val: string, shadows: string, duration: string, opacity: string) {
        this.renderer.setStyle(this.element.nativeElement, 'transform', val);
        this.renderer.setStyle(this.element.nativeElement, 'box-shadow', shadows);
        this.renderer.setStyle(this.element.nativeElement, 'transition', duration);
        this.renderer.setStyle(this.element.nativeElement.firstChild, 'opacity', opacity);
        this.renderer.setStyle(this.element.nativeElement.firstChild, 'transition', duration);
    }
}
