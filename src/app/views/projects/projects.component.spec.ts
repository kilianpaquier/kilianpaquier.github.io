import { OverlayModule } from "@angular/cdk/overlay";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { TranslateTestingModule } from "ngx-translate-testing";
import { ProjectsComponent } from "./projects.component";

declare var require: any;

describe("ProjectsComponent", () => {
    let component: ProjectsComponent;
    let fixture: ComponentFixture<ProjectsComponent>;
    let dialog: MatDialog;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectsComponent],
            imports: [
                MatDialogModule,
                OverlayModule,
                TranslateTestingModule.withTranslations({
                    fr: require("../../../assets/i18n/fr.json"),
                    en: require("../../../assets/i18n/en.json"),
                }).withDefaultLanguage("fr"),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        dialog = TestBed.inject(MatDialog);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should call open dialog", () => {
        const spyOnDialog = spyOn(dialog, "open");
        component.openDialog(0);
        expect(spyOnDialog).toHaveBeenCalled();
    });
});
