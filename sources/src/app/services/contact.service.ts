import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ContactDTO } from "../entities/contact-dto";
import { FormspreeResponse } from "../entities/formspree-response";

@Injectable({
    providedIn: "root",
})
export class ContactService {
    constructor(private httpClient: HttpClient, private translationService: TranslateService) {}

    submitForm(dto: ContactDTO, token: string): Observable<FormspreeResponse> {
        dto["g-recaptcha-response"] = token;
        dto._language = this.translationService.currentLang;
        dto._replyto = dto.email;

        const url = location.hostname === "kilian-paquier.fr" ? environment.formspreeFrUrl : environment.formspreeGitlabUrl;
        return this.httpClient.post<FormspreeResponse>(url, dto, environment.httpOptions);
    }
}
