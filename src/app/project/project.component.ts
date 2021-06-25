import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private route:Router) {}
  NavHome(){
this.route.navigate(['/profile'],{queryParams:{id:1}})
  }
  ngOnInit(): void {
  }

}
