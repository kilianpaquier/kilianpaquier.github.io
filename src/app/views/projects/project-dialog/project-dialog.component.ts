import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { faGitAlt, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCode, faGraduationCap, faHandsHelping, faUsers, faXmark } from "@fortawesome/free-solid-svg-icons";
import { TranslateService } from "@ngx-translate/core";
import { DialogData } from "src/app/entities/dialog-data";

@Component({
    selector: "app-project-dialog",
    templateUrl: "./project-dialog.component.html",
    styleUrls: ["./project-dialog.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDialogComponent implements OnInit {
    tasks!: any[];
    keys!: any[];
    urls!: any[];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private translationService: TranslateService,
        private detectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.translationService.get("projects." + this.data.index).subscribe((project) => {
            this.tasks = project.tasks;
            this.keys = project.keys;
            this.urls = project.urls;
            this.detectorRef.detectChanges();
        });
    }

    hasKey(key: string): boolean {
        return this.translationService.instant(key) !== key;
    }

    trackTasks(index: number, item: any): any {
        return item;
    }

    trackValue(index: number, item: any): any {
        return item.value;
    }

    parseIcon(iconName: string): IconDefinition {
        switch (this.translationService.instant(iconName)) {
            case "date":
                return faCalendar;
            case "course":
                return faGraduationCap;
            case "users":
                return faUsers;
            case "code":
                return faCode;
            case "git":
                return faGitAlt;
            case "client":
                return faHandsHelping;
            default:
                return faXmark;
        }
    }
}
