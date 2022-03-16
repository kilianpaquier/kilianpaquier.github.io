import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production: true,
    captchaSiteKey: process.env.CAPTCHA_SITE_KEY || "",
    formspreeFrUrl: process.env.FORMSPREE_FR_URL || "",
    formspreeGitlabUrl: process.env.FORMSPREE_GITLAB_URL || "",
    version: process.env.IMAGE_VERSION || "",
    httpOptions: {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    },
};
