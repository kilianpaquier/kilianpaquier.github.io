import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production: false,
    captchaSiteKey: process.env.CAPTCHA_SITE_KEY || "",
    formspreeFrUrl: process.env.FORMSPREE_FR_URL || "",
    formspreeGitlabUrl: process.env.FORMSPREE_GITLAB_URL || "",
    httpOptions: {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    },
};
