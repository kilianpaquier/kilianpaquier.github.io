import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
    programming!: any[];
    frameworks!: any[];
    tools!: any[];

    dataAos = "zoom-in";

    constructor(private translationService: TranslateService, private detectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.translationService.get("skills").subscribe((skills) => {
            this.programming = skills.programming;
            this.frameworks = skills.frameworks;
            this.tools = skills.tools;
            this.detectorRef.detectChanges();
        });
    }

    track(index: number, item: any): any {
        return item.name;
    }

    hasKey(key: string): boolean {
        return this.translationService.instant(key) !== key;
    }

    calculDelay(index: number): string {
        let delay = index * 100;
        while (delay >= 600) {
            delay -= 600;
        }
        return delay.toString();
    }
}
