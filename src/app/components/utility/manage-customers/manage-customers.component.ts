import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { customer } from 'src/app/model/customer.model';
import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css'],
})
export class ManageCustomersComponent implements OnInit{
  customerList: customer[] = [];
  totalItems = 0;
  currentPage = 0;
  pageSize = 5;

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private dashboardService: AdminDashboardService) {}

  ngOnInit() {
    this.getCustomers();
  }
  
  getCustomers(){
    this.dashboardService.getCustomers().subscribe( (list) => this.customerList = list);
  }

  onPageChange(event : PageEvent){
    this.currentPage = event.pageIndex;
  }

  getCurrentPageItems(): customer[] {
    const startIndex = this.currentPage * this.pageSize;
    this.totalItems = this.customerList.length;
    return this.customerList.slice(startIndex, startIndex + this.pageSize);
  }
}
