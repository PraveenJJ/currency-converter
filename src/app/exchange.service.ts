import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExchangeService {

    constructor(private http: HttpClient) { }

    getExchangeRate(fromCurrency: string, toCurrency: string): Observable<number> {
        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

        return this.http.get<any>(apiUrl).pipe(
            map(response => response.rates[toCurrency])
        );
    }
}
