import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  isSmallScreen!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // vscode bug
    // tslint:disable-next-line: deprecation
    this.breakpointObserver.observe('(max-width: 599px)').subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
