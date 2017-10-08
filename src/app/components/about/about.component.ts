import { Component, OnInit } from '@angular/core';
import { OtherService } from '../../services/other.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private otherService: OtherService) { }

  ngOnInit() {
    this.otherService.setTitle("About");
  }

}
