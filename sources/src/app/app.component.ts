import { Component, OnInit } from "@angular/core";
import Aos from "aos";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        Aos.init({
            startEvent: "load",
            easing: "ease-in-out-sine",
        });
    }

    title = "kilian-paquier.fr";
}
