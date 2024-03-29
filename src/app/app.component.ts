import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {HomePage} from "../pages/home/home";
import {ViewReservations} from "../pages/view-reservations/view-reservations";
import {Login} from "../pages/login/login";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = Login;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', component: HomePage},
            {title: 'Reservations', component: ViewReservations}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.platform.registerBackButtonAction(() => {
                if (this.nav.canGoBack()) {
                    this.nav.pop();
                } else {
                    this.platform.exitApp();
                }
            });
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
