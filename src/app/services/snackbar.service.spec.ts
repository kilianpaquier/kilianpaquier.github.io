import { OverlayModule } from "@angular/cdk/overlay";
import { TestBed } from "@angular/core/testing";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { TranslateModule } from "@ngx-translate/core";
import { SnackbarService } from "./snackbar.service";

describe("SnackbarService", () => {
    let service: SnackbarService;
    let snackbar: MatSnackBar;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MatSnackBarModule, OverlayModule, TranslateModule.forRoot()],
        });
        service = TestBed.inject(SnackbarService);
        snackbar = TestBed.inject(MatSnackBar);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should alert a message", () => {
        const spyOnSnackbar = spyOn(snackbar, "open");
        service.alert("message");
        expect(spyOnSnackbar).toHaveBeenCalledWith("message", "contact.snack.close", { duration: 3000 });
    });

    it("should alert a message with duration", () => {
        const spyOnSnackbar = spyOn(snackbar, "open");
        service.alert("message", 200);
        expect(spyOnSnackbar).toHaveBeenCalledWith("message", "contact.snack.close", { duration: 200 });
    });
});
