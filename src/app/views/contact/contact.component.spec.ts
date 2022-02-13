import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RecaptchaV3Module, ReCaptchaV3Service, RECAPTCHA_V3_SITE_KEY } from "ng-recaptcha";
import { TranslateTestingModule } from "ngx-translate-testing";
import { of, throwError } from "rxjs";
import { ContactService } from "src/app/services/contact.service";
import { SnackbarService } from "src/app/services/snackbar.service";
import { environment } from "src/environments/environment";
import { ContactComponent } from "./contact.component";

declare var require: any;

describe("ContactComponent", () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let captcha: ReCaptchaV3Service;
    let snackbarService: SnackbarService;
    let contactService: ContactService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactComponent],
            imports: [
                MatSnackBarModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RecaptchaV3Module,
                TranslateTestingModule.withTranslations({
                    fr: require("../../../assets/i18n/fr.json"),
                    en: require("../../../assets/i18n/en.json"),
                }).withDefaultLanguage("fr"),
            ],
            providers: [
                {
                    provide: RECAPTCHA_V3_SITE_KEY,
                    useValue: environment.captchaSiteKey,
                },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        captcha = TestBed.inject(ReCaptchaV3Service);
        snackbarService = TestBed.inject(SnackbarService);
        contactService = TestBed.inject(ContactService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should submit contact with invalid contactForm", () => {
        const spyOnCaptcha = spyOn(captcha, "execute");
        component.onSubmit();
        expect(spyOnCaptcha).not.toHaveBeenCalled();
    });

    it("should submit contact but bad captcha validation", () => {
        component.contactForm.patchValue({
            email: "toto@toto.fr",
            fullname: "tata",
            message: "message",
        });

        spyOn(captcha, "execute").and.returnValue(throwError(() => {}));

        const spyOnSnackbar = spyOn(snackbarService, "alert");
        component.onSubmit();

        expect(spyOnSnackbar).toHaveBeenCalledWith("contact.snack.captchaMessage");
        expect(component.loading).toBeFalse();
    });

    it("should submit contact but bad error on http formspree call", () => {
        component.contactForm.patchValue({
            email: "toto@toto.fr",
            fullname: "tata",
            message: "message",
        });

        spyOn(captcha, "execute").and.returnValue(of("ok"));
        spyOn(contactService, "submitForm").and.returnValue(throwError(() => new HttpErrorResponse({ status: 400 })));

        const spyOnSnackbar = spyOn(snackbarService, "alert");
        component.onSubmit();

        expect(spyOnSnackbar).toHaveBeenCalledWith("contact.snack.errorMessage");
        expect(component.loading).toBeFalse();
    });

    it("should submit contact but bad email on http formspree call", () => {
        component.contactForm.patchValue({
            email: "toto@toto.fr",
            fullname: "tata",
            message: "message",
        });

        spyOn(captcha, "execute").and.returnValue(of("ok"));
        spyOn(contactService, "submitForm").and.returnValue(
            throwError(
                () =>
                    new HttpErrorResponse({
                        status: 422,
                        error: {
                            errors: [{ code: "toto" }, { code: "TYPE_EMAIL" }],
                        },
                    })
            )
        );

        const spyOnSnackbar = spyOn(snackbarService, "alert");
        component.onSubmit();

        expect(spyOnSnackbar).not.toHaveBeenCalled();
        expect(component.loading).toBeFalse();
        expect(component.contactForm.get("email")?.getError("email")).toBeTrue();
    });

    it("should submit contact but good response ok on http formspree call", () => {
        component.contactForm.patchValue({
            email: "toto@toto.fr",
            fullname: "tata",
            message: "message",
        });

        spyOn(captcha, "execute").and.returnValue(of("ok"));
        spyOn(contactService, "submitForm").and.returnValue(of(new HttpResponse({ status: 200 })));

        const spyOnSnackbar = spyOn(snackbarService, "alert");
        component.onSubmit();

        expect(spyOnSnackbar).toHaveBeenCalledWith("contact.snack.successMessage");
        expect(component.loading).toBeFalse();
    });
});
