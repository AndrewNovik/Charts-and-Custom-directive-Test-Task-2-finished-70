import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavBarComponent } from './header-nav-bar/header-nav-bar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderNavBarComponent,
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
