import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashBoardDto } from '../../components/dashBoard';
import { DashBoardd } from '../../services/dashBoard/dashBoard';

@Component({
  selector: 'app-dash-board',
  standalone:true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css'
})

export class DashBoard implements OnInit {
  dashboardData: DashBoardDto | null = null;
  isLoading: boolean = true;
  error: string | null = null;

  private dashBoardService = inject(DashBoardd)
DashBoard: any;

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.dashBoardService.getDashboardData().subscribe({
      next: (data: DashBoardDto | null) => {
        console.log(data);
        
       this.dashboardData = data;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load dashboard data';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
