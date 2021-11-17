import { Component } from '@angular/core';
import Website from './website.model';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {
  websites: Website[] = [
    {
      title: 'Chat',
      subtitle: 'Simple, lightweight, one-page chat application',
      githubLink: 'https://github.com/MattMan569/Chat',
      link: 'https://chat.matthewpolsom.ca',
      screenshotLink: 'assets/screenshots/chat.png',
    }, {
      title: 'ngChat',
      subtitle: 'Full stack chat application with more features',
      githubLink: 'https://github.com/MattMan569/ngChat',
      link: 'https://polsom-ngchat.herokuapp.com',
      screenshotLink: 'assets/screenshots/ngchat.png',
    }, {
      title: 'GIFmakr',
      subtitle: 'Client side video to gif converter',
      githubLink: 'https://github.com/MattMan569/GIFmakr',
      link: 'https://gifmakr.matthewpolsom.ca',
      screenshotLink: 'assets/screenshots/gifmakr.png',
    }, {
      title: 'UrlShortener',
      subtitle: 'Url shortening and redirection service',
      githubLink: 'https://github.com/MattMan569/UrlShortener',
      link: 'https://urlshortener.matthewpolsom.ca',
      screenshotLink: 'assets/screenshots/urlshortener.png',
    },
  ];

  constructor() { }
}
