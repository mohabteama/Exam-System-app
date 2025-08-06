import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation-page.html',
  styleUrl: './navigation-page.css'
})
export class NavigationPage {}
