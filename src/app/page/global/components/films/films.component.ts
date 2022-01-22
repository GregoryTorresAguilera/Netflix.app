import { Film } from 'src/app/page/global/models/Netflix';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  @Input() public film!: Film
  constructor() { }

  ngOnInit(): void {
  }

}
