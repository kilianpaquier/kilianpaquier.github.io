import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateTestingModule } from "ngx-translate-testing";
import { AboutComponent } from "./about.component";

declare var require: any;

describe("AboutComponent", () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AboutComponent, TranslatePipe],
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
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
