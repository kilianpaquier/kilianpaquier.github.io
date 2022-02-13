import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-education",
    templateUrl: "./education.component.html",
    styleUrls: ["./education.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent implements OnInit {
    educations!: any[];

    constructor(private translationService: TranslateService, private detectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.translationService.get("educations").subscribe((educations) => {
            this.educations = educations;
            this.detectorRef.detectChanges();
        });
    }

    track(index: number, item: any): any {
        return item.title;
    }
}
