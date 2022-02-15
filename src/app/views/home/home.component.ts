import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { faGitAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { TranslateService } from "@ngx-translate/core";
import { CookieService } from "ngx-cookie-service";
import { polyfill } from "smoothscroll-polyfill";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    progressbarValue = 0;
    faGit = faGitAlt;
    faLinkedinIn = faLinkedinIn;
    needCalcul = true;

    @ViewChild("menuTrigger")
    menuTrigger?: MatMenuTrigger;

    constructor(private cookieService: CookieService, private translateService: TranslateService) {}

    ngOnInit(): void {
        this.setTheme();
        this.changeLang(this.cookieService.check("lang") ? this.cookieService.get("lang") : "fr");
        polyfill();
    }

    @HostListener("document:scroll", [])
    onScroll(): void {
        this.menuTrigger?.closeMenu();
        const position = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight - 1040;
        const max = document.documentElement.scrollHeight - 1040;
        this.progressbarValue = (position / max) * 100;
    }

    changeTheme(): void {
        const body = document.body;
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            this.cookieService.set("theme", "light-theme");
        } else {
            body.classList.add("dark-theme");
            this.cookieService.set("theme", "dark-theme");
        }
    }

    changeLang(lang: string): void {
        this.translateService.use(lang);
        this.cookieService.set("lang", lang);
    }

    setTheme(): void {
        const theme = this.cookieService.get("theme");
        if (theme && theme === "dark-theme") {
            this.changeTheme();
        }
    }

    scrollTo(section: string): void {
        window.scroll({
            top: document.getElementById(section)?.offsetTop,
            behavior: "smooth",
        });
    }

    /* toPdf(): void {
        const data = document.getElementById('htmlResume');
        const date = new Date();

        html2canvas(data!).then((canvas) => {
            const contentDataURL = canvas.toDataURL('image/png');
            // let pdf = new jspdf('l', 'cm', 'a3'); //Generates PDF in landscape mode
            let pdf = new jspdf('p', 'cm', 'a4');

            pdf.addImage(contentDataURL, 'PNG', 0, 0, 21.0, 29.7);
            pdf.save(`${date.getFullYear()}.${date.getMonth()}.${date.getDate()}_CV_KILIAN_PAQUIER.pdf`);
        });
    } */
}
