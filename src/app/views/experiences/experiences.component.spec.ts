import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslateTestingModule } from "ngx-translate-testing";
import { ExperiencesComponent } from "./experiences.component";

declare var require: any;

describe("ExperiencesComponent", () => {
    let component: ExperiencesComponent;
    let fixture: ComponentFixture<ExperiencesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExperiencesComponent],
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
        fixture = TestBed.createComponent(ExperiencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should close all other panels", () => {});
});
