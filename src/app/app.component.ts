import { Component } from '@angular/core';
import { CurrencyConverterComponent } from "./currency-converter/currency-converter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CurrencyConverterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'currency-converter';
}
