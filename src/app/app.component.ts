import { Component } from '@angular/core';
import verbsData from '../assets/verbs.json';

interface Verb {
    verb: string,
    iAndYouForm: string,
    translate: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    displayedColumns: string[] = ['verb', 'iAndYouForm', 'translate'];
    dataSource = verbsData;
}
