import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  text = "infobox text property";
  hidden = false;
  buttonDisplay = "Hide";

  books = [
    {
      title: "Book #1",
      subtitle: "Subtitle #1",
    },
    {
      title: "Book #2",
      subtitle: "Subtitle #2",
    },
    {
      title: "Book #3",
      subtitle: "Subtitle #3",
    },
  ];

  constructor() 
  { 

  }

  hideToggle()
  {
    this.hidden = !this.hidden;
    this.buttonDisplay = this.hidden ? "Show" : "Hide";
  }

  ngOnInit(): void 
  {
  }

}
