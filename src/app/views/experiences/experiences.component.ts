import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-experiences",
    templateUrl: "./experiences.component.html",
    styleUrls: ["./experiences.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent implements OnInit {
    experiences!: any[];

    @ViewChildren(MatExpansionPanel)
    panels!: QueryList<MatExpansionPanel>;

    constructor(private translationService: TranslateService, private detectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.translationService.get("experiences").subscribe((experiences) => {
            this.experiences = experiences;
            this.detectorRef.detectChanges();
        });
    }

    track(index: number, item: any): any {
        return item.company;
    }

    hasKey(key: string): boolean {
        return this.translationService.instant(key) !== key;
    }

    closeOthersPanels(panelNumber: number): void {
        this.panels.forEach((panel) => {
            if (panel.opened && !panel.id.toString().includes(panelNumber.toString())) {
                panel.close();
            }
        });
    }

    calculFadeInClass(isEven: boolean): string {
        return isEven ? "fade-right" : "fade-left";
    }

    calculDelay(index: number): string {
        switch (index) {
            case 2:
            case 3:
                return "100";
            case 4:
            case 5:
                return "200";
            case 6:
            case 7:
                return "300";
            default:
                return "0";
        }
    }
}
