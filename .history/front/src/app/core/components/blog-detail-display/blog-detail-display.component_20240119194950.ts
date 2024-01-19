import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail-display',
  templateUrl: './blog-detail-display.component.html',
  styleUrls: ['./blog-detail-display.component.css']
})
export class BlogDetailDisplayComponent implements OnInit {
  blog: any;
  title = "";
  imgString = "";
  continent = "";
  country = "";
  description = "";
  days: number = 0;
  date = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = this.route.snapshot.params['title'];
      this.blog = data['blog'];


    });
  }

  // ngOnInit(): void {
  //   this.title = this.route.snapshot.params['title'];
  // }
}
