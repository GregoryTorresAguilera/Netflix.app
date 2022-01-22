import { Component, OnInit, Input } from '@angular/core';
import { Nav } from 'src/app/page/global/models/Netflix';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() public nav!: Nav
  public btnText: string = "🧐"
  constructor() { }

  ngOnInit(): void {
  }

  public setDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    this.btnText == '😎' ? this.btnText = '🧐' : this.btnText = '😎'

}
}
