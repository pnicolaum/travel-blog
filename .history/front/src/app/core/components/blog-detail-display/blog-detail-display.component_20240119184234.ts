import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail-display',
  templateUrl: './blog-detail-display.component.html',
  styleUrls: ['./blog-detail-display.component.css']
})
export class BlogDetailDisplayComponent implements OnInit {
  blog: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.blog = data.blog;
    });
  }
}
