import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-last-blogs',
  templateUrl: './last-blogs.component.html',
  styleUrls: ['./last-blogs.component.css']
})
export class LastBlogsComponent {
  recentBlogs: any[] = [];
  imageName = "";
  imageUrl = "";
  imageUrls: string[] = [];

  url = "http://localhost:3000/uploads/";
  extension = ".jpg";

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {

    this.blogService.getRecentBlogs()
      .subscribe(
        (response) => {
          this.recentBlogs = response;
          console.log(response)
        }, (error) => {
          console.log(error);
        }
      )

  }

}
