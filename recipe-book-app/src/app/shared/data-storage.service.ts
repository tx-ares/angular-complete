import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ // Remember that this is an optional / alternative way to provide a service to the entire app.
  providedIn: 'root' // Alternatively, I can add this to the providers array in app.module.ts
}) // This is however necessary for services which contain injected services.  Like HttpClientModule for example.
export class DataStorageService {

  constructor(private http: HttpClient) { }
}
