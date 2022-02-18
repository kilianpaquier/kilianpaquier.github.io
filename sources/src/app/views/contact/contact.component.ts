import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ReCaptchaV3Service } from "ng-recaptcha";
import { ContactDTO } from "src/app/entities/contact-dto";
import { ContactService } from "src/app/services/contact.service";
import { SnackbarService } from "src/app/services/snackbar.service";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    contactForm!: FormGroup;
    loading = false;

    @ViewChild("form")
    form!: NgForm;

    constructor(
        private formBuilder: FormBuilder,
        private recaptchaV3Service: ReCaptchaV3Service,
        private contactService: ContactService,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            fullname: ["", Validators.required],
            company: [""],
            message: ["", [Validators.required, Validators.maxLength(500)]],
        });
    }

    onSubmit(): void {
        if (this.contactForm.invalid) {
            return;
        }

        const values: ContactDTO = this.contactForm.value;
        this.loading = true;

        this.recaptchaV3Service.execute("submit").subscribe({
            next: (token) => {
                this.contactService.submitForm(values, token).subscribe({
                    // Successful response
                    next: () => {
                        this.snackbarService.alert("contact.snack.successMessage");
                        this.contactForm.reset();
                        this.form.reset();
                        this.form.resetForm();
                        this.loading = false;
                    },

                    // Custom formspree error
                    error: (response) => {
                        if (response.status === 422) {
                            const errors: any[] = response.error.errors;

                            if (errors.filter((error) => error.code === "TYPE_EMAIL").length > 0) {
                                this.contactForm.get("email")?.setErrors({ email: true });
                            }
                        } else {
                            this.snackbarService.alert("contact.snack.errorMessage");
                        }
                        this.loading = false;
                    },
                });
            },

            error: (error) => {
                this.snackbarService.alert("contact.snack.captchaMessage");
                this.loading = false;
            },
        });
    }
}
