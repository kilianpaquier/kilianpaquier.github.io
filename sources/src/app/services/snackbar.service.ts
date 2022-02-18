import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
    providedIn: "root",
})
export class SnackbarService {
    constructor(private snackBar: MatSnackBar, private translateService: TranslateService) {}

    alert(message: string, duration?: number): void {
        this.snackBar.open(this.translateService.instant(message), this.translateService.instant("contact.snack.close"), {
            duration: duration || 3000,
        });
    }
}
