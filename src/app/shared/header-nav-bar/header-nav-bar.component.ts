import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbNavModule],
  templateUrl: './header-nav-bar.component.html',
  styleUrl: './header-nav-bar.component.scss',
})
export class HeaderNavBarComponent {
  constructor() {}
}
