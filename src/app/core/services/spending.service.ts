import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, map, switchMap} from "rxjs/operators";
import {Observable, of, throwError} from "rxjs";
import {Expense} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class SpendingService {

  private spendingUrl = 'assets/data/spending.json';

  constructor(private http: HttpClient) {}

  getSpendingData(expanded: boolean): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.spendingUrl)
      .pipe(
        map(data => {
          const sortedData = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          return expanded ? sortedData : sortedData.slice(0, 5);
        }),
        catchError(this.handleError)
      );
  }

getFilteredSpendingData(params: { startDate?: Date, endDate?: Date, type?: string }): Observable<Expense[]> {
  return this.http.get<Expense[]>(this.spendingUrl).pipe(
    switchMap(data => {
      return of(
        data.filter(expense => {
          const expenseDate = new Date(expense.createdAt);

          const isDateInRange =
            (!params.startDate || expenseDate >= new Date(params.startDate)) &&
            (!params.endDate || expenseDate <= new Date(params.endDate));

          const isMatchingType = !params.type || expense.type.toLowerCase() === params.type.toLowerCase();

          return isDateInRange && isMatchingType;
        })
      );
    }),
    catchError(this.handleError)
  );
}
  getFilteredSpendingAmount(params: { startDate?: Date, endDate?: Date}): Observable<number> {
    return this.getFilteredSpendingData(params).pipe(
      switchMap(data => {
        if (!data || data.length === 0) {
          return throwError('No data available');
        }
        return of(data);
      }),
      map(data => data.reduce((total, expense) => total + expense.amount, 0)),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

private handleError(error) {
    console.error('An error occurred:', error);
    return [];
  }
}
