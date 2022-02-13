import { ElementRef, Renderer2 } from "@angular/core";
import { DataAosDirectiveDirective } from "./data-aos-directive.directive";

describe("DataAosDirectiveDirective", () => {
    let dataAosDirective: DataAosDirectiveDirective;
    let elementRef: ElementRef;
    let spyRenderer2: Renderer2;

    beforeEach(() => {
        elementRef = new ElementRef({});
        spyRenderer2 = jasmine.createSpyObj("Renderer2", ["setAttribute"]);
        dataAosDirective = new DataAosDirectiveDirective(elementRef, spyRenderer2);
    });

    it("should create an instance", () => {
        expect(dataAosDirective).toBeTruthy();
    });

    it("should have call setAttribute for data-aos", () => {
        dataAosDirective.dataAos = "toto";

        dataAosDirective.ngOnInit();

        expect(spyRenderer2.setAttribute).toHaveBeenCalledWith({}, "data-aos", "toto");
    });

    it("should have call setAttribute for data-aos and data-aos-delay", () => {
        dataAosDirective.dataAos = "toto";
        dataAosDirective.dataAosDelay = "5s";

        dataAosDirective.ngOnInit();

        expect(spyRenderer2.setAttribute).toHaveBeenCalledWith({}, "data-aos", "toto");
        expect(spyRenderer2.setAttribute).toHaveBeenCalledWith({}, "data-aos-delay", "5s");
    });
});
