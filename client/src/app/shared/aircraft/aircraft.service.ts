import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AircraftService {
  public AIRCRAFT_API = '//localhost:8080/aircrafts';

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

    if (aircraft['id']) {
      result = this.http.put(this.AIRCRAFT_API + '/' + aircraft.id, aircraft);
    } else {
      result = this.http.post(this.AIRCRAFT_API, aircraft);
    }
    return result;
  }

  remove(id: number) {
    const url = `${this.AIRCRAFT_API}/${id}`;
    return this.http.delete(url);
  }

}
