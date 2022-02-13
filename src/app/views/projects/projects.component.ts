import { Overlay } from "@angular/cdk/overlay";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { ProjectDialogComponent } from "./project-dialog/project-dialog.component";

@Component({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
    projects!: any[];

    constructor(
        private dialog: MatDialog,
        private translationService: TranslateService,
        private overlay: Overlay,
        private detectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.translationService.get("projects").subscribe((projects) => {
            this.projects = projects;
            this.detectorRef.detectChanges();
        });
    }

    track(index: number, item: any): any {
        return item.name;
    }

    openDialog(index: number): void {
        this.dialog.open(ProjectDialogComponent, {
            autoFocus: false,
            data: { index },
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
    }

    calculDelay(index: number): string {
        switch (index) {
            case 1:
            case 4:
                return "100";
            case 2:
            case 5:
                return "200";
            default:
                return "0";
        }
    }
}
