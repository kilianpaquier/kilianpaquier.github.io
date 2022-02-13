import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-interests",
    templateUrl: "./interests.component.html",
    styleUrls: ["./interests.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestsComponent implements OnInit {
    interests!: any[];

    constructor(private translationService: TranslateService, private detectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.translationService.get("interests").subscribe((interets) => {
            this.interests = interets;
            this.detectorRef.detectChanges();
        });
    }

    track(index: number, item: any): any {
        return item.name;
    }

    calculAdditionalClasses(index: number, isFirst: boolean, isLast: boolean): string[] {
        const classes = [];
        if (isFirst) {
            classes.push("offset-lg-1");
        }
        if (!isLast) {
            classes.push("mb-2", "mb-lg-0");
        }
        if (isLast || index === this.interests.length - 2) {
            classes.push("col-sm-6", "col-md-6");
        } else {
            classes.push("col-sm-4", "col-md-4");
        }
        return classes;
    }
}
