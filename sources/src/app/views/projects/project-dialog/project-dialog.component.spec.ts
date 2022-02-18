import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCode, faGraduationCap, faHandsHelping, faUsers, faXmark } from "@fortawesome/free-solid-svg-icons";
import { TranslateTestingModule } from "ngx-translate-testing";
import { ProjectDialogComponent } from "./project-dialog.component";

declare var require: any;

describe("ProjectDialogComponent", () => {
    let component: ProjectDialogComponent;
    let fixture: ComponentFixture<ProjectDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectDialogComponent],
            imports: [
                TranslateTestingModule.withTranslations({
                    fr: require("../../../../assets/i18n/fr.json"),
                    en: require("../../../../assets/i18n/en.json"),
                }).withDefaultLanguage("fr"),
            ],
            providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should track item", () => {
        expect(component.trackTasks(0, "message")).toEqual("message");
    });

    it("should track value", () => {
        expect(component.trackValue(0, { value: "message" })).toEqual("message");
    });

    it("should correctly parse icons", () => {
        expect(component.parseIcon("date")).toEqual(faCalendar);
        expect(component.parseIcon("course")).toEqual(faGraduationCap);
        expect(component.parseIcon("users")).toEqual(faUsers);
        expect(component.parseIcon("code")).toEqual(faCode);
        expect(component.parseIcon("client")).toEqual(faHandsHelping);
        expect(component.parseIcon("git")).toEqual(faGitAlt);
        expect(component.parseIcon("toto")).toEqual(faXmark);
    });
});
