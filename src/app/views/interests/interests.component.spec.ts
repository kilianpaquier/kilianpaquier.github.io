import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslateTestingModule } from "ngx-translate-testing";
import { InterestsComponent } from "./interests.component";

declare var require: any;

describe("InterestsComponent", () => {
    let component: InterestsComponent;
    let fixture: ComponentFixture<InterestsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InterestsComponent],
            imports: [
                TranslateTestingModule.withTranslations({
                    fr: require("../../../assets/i18n/fr.json"),
                    en: require("../../../assets/i18n/en.json"),
                }).withDefaultLanguage("fr"),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InterestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
