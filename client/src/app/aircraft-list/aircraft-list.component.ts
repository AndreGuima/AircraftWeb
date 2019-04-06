import { Component, OnInit} from '@angular/core';
import { AircraftService } from '../shared/aircraft/aircraft.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

  aircrafts: Array<any>;
  displayedColumns: string[] = ['id', 'name', 'serialNumber', 'un', 'capacity', 'weight', 'manufactureDate', 'symbol'];
  

  constructor(private aircraftService: AircraftService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.aircraftService.getAll().subscribe(data => {
      this.aircrafts = data;
      for (const aircraft of this.aircrafts) {
        this.giphyService.get(aircraft.name).subscribe(url => aircraft.giphyUrl = url);
      }      
    });
  }

}