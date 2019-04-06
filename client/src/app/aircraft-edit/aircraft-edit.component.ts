import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AircraftService } from '../shared/aircraft/aircraft.service';
import { NgForm } from '@angular/forms';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-aircraft-edit',
  templateUrl: './aircraft-edit.component.html',
  styleUrls: ['./aircraft-edit.component.css']
})
export class AircraftEditComponent implements OnInit, OnDestroy {
  aircraft: any = {};
  date = new Date((new Date().getTime() - 3888000000));
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private aircraftService: AircraftService,
    private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.aircraftService.get(id).subscribe((aircraft: any) => {
          if (aircraft) {
            this.aircraft = aircraft;
            this.giphyService.get(aircraft.name).subscribe(url => aircraft.giphyUrl = url);
          } else {
            console.log(`Aircraft with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/aircraft-list']);
  }

  save(form: NgForm) {
    this.aircraftService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.aircraftService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}