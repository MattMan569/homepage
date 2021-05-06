import { Component, OnInit } from '@angular/core';
import Website from './website.model';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent implements OnInit {
  websites: Website[] = [
    {
      title: 'ngChat',
      subtitle: 'Full stack chat application',
      description: 'TODO',
      githubLink: '#',
      link: '#',
      screenshotLink: '#',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
