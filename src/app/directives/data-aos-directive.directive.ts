import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: "[appDataAosDirective]",
})
export class DataAosDirectiveDirective implements OnInit {
    @Input()
    dataAos!: string;

    @Input()
    dataAosDelay?: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.renderer.setAttribute(this.elementRef.nativeElement, "data-aos", this.dataAos);
        if (this.dataAosDelay) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "data-aos-delay", this.dataAosDelay);
        }
    }
}
