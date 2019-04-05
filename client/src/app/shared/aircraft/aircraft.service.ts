import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AircraftService {
  public API = '//localhost:8080';
  public AIRCRAFT_API = this.API + '/aircrafts';

  constructor(private http: HttpClient) { 
  }

  getAll(): Observable<any> {
    return this.http.get(this.AIRCRAFT_API);
  }

  get(id: string) {
    return this.http.get(this.AIRCRAFT_API + '/' + id);
  }

  save(aircraft: any): Observable<any> {
    let result: Observable<Object>;
    if (aircraft['href']) {
      result = this.http.put(aircraft.href, aircraft);
    } else {
      result = this.http.post(this.AIRCRAFT_API, aircraft);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
