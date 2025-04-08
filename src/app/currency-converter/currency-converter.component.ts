import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExchangeService } from '../exchange.service';

@Component({
    selector: 'app-currency-converter',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './currency-converter.component.html',
    styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {
    amount: number | null = null;
    fromCurrency = 'USD';
    toCurrency = 'INR';
    currencies = ['USD', 'INR', 'EUR', 'GBP', 'JPY'];
    convertedAmount: number | null = null;
    exchangeRate: number | null = null;

    constructor(private exchangeService: ExchangeService) { }

    get isValid(): boolean {
        return !!this.amount && this.amount > 0 && this.fromCurrency !== this.toCurrency;
    }

    convertCurrency(): void {
        if (!this.isValid) return;

        this.exchangeService.getExchangeRate(this.fromCurrency, this.toCurrency)
            .subscribe(rate => {
                this.exchangeRate = rate;
                this.convertedAmount = +(this.amount! * rate).toFixed(2);
            });
    }

    onInputChange(): void {
        this.convertedAmount = null;
        this.exchangeRate = null;
    }

    onCurrencyChange(): void {
        this.convertedAmount = null;
        this.exchangeRate = null;
    }
}
