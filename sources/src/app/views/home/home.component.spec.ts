import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatMenuModule } from "@angular/material/menu";
import { CookieService } from "ngx-cookie-service";
import { TranslateTestingModule } from "ngx-translate-testing";
import { HomeComponent } from "./home.component";

declare var require: any;

describe("HomeComponent", () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let cookieService: CookieService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [
                TranslateTestingModule.withTranslations({
                    fr: require("../../../assets/i18n/fr.json"),
                    en: require("../../../assets/i18n/en.json"),
                }).withDefaultLanguage("fr"),
                MatMenuModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        cookieService = TestBed.inject(CookieService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should call scroll", () => {
        const spyOnWindow = spyOn(window, "scroll");
        component.scrollTo("section");
        expect(spyOnWindow).toHaveBeenCalled();
    });

    it("should onScroll", () => {
        component.onScroll();
        expect(component.progressbarValue).not.toEqual(0);
    });

    it("should change theme to dark", () => {
        spyOn(document.body.classList, "contains").and.returnValue(false);
        const spyOnCookieService = spyOn(cookieService, "set");

        component.changeTheme();
        expect(spyOnCookieService).toHaveBeenCalledWith("theme", "dark-theme");
    });

    it("should change theme to white", () => {
        spyOn(document.body.classList, "contains").and.returnValue(true);
        const spyOnCookieService = spyOn(cookieService, "set");

        component.changeTheme();
        expect(spyOnCookieService).toHaveBeenCalledWith("theme", "light-theme");
    });

    it("should set theme to dark", () => {
        spyOn(cookieService, "get").and.returnValue("dark-theme");
        const spyOnChangeTheme = spyOn(component, "changeTheme");

        component.setTheme();
        expect(spyOnChangeTheme).toHaveBeenCalled();
    });
});
