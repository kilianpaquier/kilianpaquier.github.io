import { registerLocaleData } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from "@angular/core";
import localeEn from "@angular/common/locales/en";
import localeFr from "@angular/common/locales/fr";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RecaptchaV3Module, RECAPTCHA_LANGUAGE, RECAPTCHA_V3_SITE_KEY } from "ng-recaptcha";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataAosDirectiveDirective } from "./directives/data-aos-directive.directive";
import { AboutComponent } from "./views/about/about.component";
import { ContactComponent } from "./views/contact/contact.component";
import { EducationComponent } from "./views/education/education.component";
import { ExperiencesComponent } from "./views/experiences/experiences.component";
import { FooterComponent } from "./views/footer/footer.component";
import { HomeComponent } from "./views/home/home.component";
import { InterestsComponent } from "./views/interests/interests.component";
import { IntroComponent } from "./views/intro/intro.component";
import { ProjectDialogComponent } from "./views/projects/project-dialog/project-dialog.component";
import { ProjectsComponent } from "./views/projects/projects.component";
import { SkillsComponent } from "./views/skills/skills.component";

// Add here locales when a new langage is declared in i18n .json
registerLocaleData(localeFr, "fr");
registerLocaleData(localeEn, "en");

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SkillsComponent,
        ContactComponent,
        EducationComponent,
        FooterComponent,
        ExperiencesComponent,
        InterestsComponent,
        ProjectsComponent,
        IntroComponent,
        AboutComponent,
        ProjectDialogComponent,
        DataAosDirectiveDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        RecaptchaV3Module,
        BrowserAnimationsModule,
        MatIconModule,
        FlexLayoutModule,
        MatDialogModule,
        MatMenuModule,
        FontAwesomeModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            defaultLanguage: "fr",
        }),
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatExpansionModule,
        MatCardModule,
    ],
    providers: [
        CookieService,
        {
            provide: RECAPTCHA_V3_SITE_KEY,
            useValue: environment.captchaSiteKey,
        },
        {
            provide: RECAPTCHA_LANGUAGE,
            useFactory: (locale: string) => locale,
            deps: [LOCALE_ID],
        },
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, "./assets/i18n/");
}
