import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
    selector: '[appOnHover]'
})
export class OnHoverLinkButtonDirective {

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.setButtonBg('rgba(54, 54, 54, 0.75)', '0.3s all');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setButtonBg('rgba(54, 54, 54, 0.6)', '0.2s all');
    }

    private setButtonBg(bgSet: string, effect: string) {
        this.renderer.setStyle(this.element.nativeElement, 'background', bgSet);
        this.renderer.setStyle(this.element.nativeElement, 'transition', effect);
    }
}
