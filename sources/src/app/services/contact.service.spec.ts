import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { TranslateTestingModule } from "ngx-translate-testing";
import { environment } from "src/environments/environment";
import { ContactDTO } from "../entities/contact-dto";
import { ContactService } from "./contact.service";

describe("ContactService", () => {
    let service: ContactService;
    let httpClient: HttpClient;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                TranslateTestingModule.withTranslations({
                    fr: require("../../assets/i18n/fr.json"),
                    en: require("../../assets/i18n/en.json"),
                }).withDefaultLanguage("fr"),
            ],
        });

        service = TestBed.inject(ContactService);
        httpClient = TestBed.inject(HttpClient);
        httpController = TestBed.inject(HttpTestingController);

        environment.formspreeGitlabUrl = "gitlabUrl";
        environment.formspreeFrUrl = "gitlabUrl";
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should submit form", () => {
        service.submitForm({ email: "toto", fullname: "tata", message: "un message", company: "entreprise" }, "token").subscribe();
        httpController.expectOne(environment.formspreeGitlabUrl);
    });

    it("should submit form without company", () => {
        service.submitForm({ email: "toto", fullname: "tata", message: "un message" }, "token").subscribe();
        httpController.expectOne(environment.formspreeGitlabUrl);
    });

    it("should submit form spying httpClient", () => {
        const spyHttpClient = spyOn(httpClient, "post");
        service.submitForm({ email: "toto", fullname: "tata", message: "un message", company: "une entreprise" }, "token");

        expect(spyHttpClient).toHaveBeenCalledWith(
            environment.formspreeGitlabUrl,
            {
                fullname: "tata",
                message: "un message",
                company: "une entreprise",
                _replyto: "toto",
                "g-recaptcha-response": "token",
                email: "toto",
                _language: undefined,
            } as ContactDTO,
            environment.httpOptions
        );
    });

    it("should submit form spying httpClient without company", () => {
        const spyHttpClient = spyOn(httpClient, "post");
        service.submitForm({ email: "toto", fullname: "tata", message: "un message" }, "token");

        expect(spyHttpClient).toHaveBeenCalledWith(
            environment.formspreeGitlabUrl,
            {
                fullname: "tata",
                message: "un message",
                _replyto: "toto",
                "g-recaptcha-response": "token",
                email: "toto",
                _language: undefined,
            } as ContactDTO,
            environment.httpOptions
        );
    });
});
