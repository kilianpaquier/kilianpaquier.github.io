import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import Aos from "aos";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create the app", () => {
        expect(component).toBeTruthy();
    });

    it("should init the app", () => {
        const aosSpy = spyOn(Aos, "init");
        component.ngOnInit();
        expect(aosSpy).toHaveBeenCalled();
    });

    it(`should have as title 'kilian-paquier'`, () => {
        expect(component.title).toEqual("kilian-paquier.fr");
    });
});
