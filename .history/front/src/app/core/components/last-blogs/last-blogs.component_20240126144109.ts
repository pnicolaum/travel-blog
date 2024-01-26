import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-last-blogs',
  templateUrl: './last-blogs.component.html',
  styleUrls: ['./last-blogs.component.css']
})
export class LastBlogsComponent {
  recentBlogs: any[] = [];
  imageNames: any[] = [];
  encodedImageNames: any[] = [];
  imageUrl: any[] = [];
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
          console.log(this.recentBlogs)
          console.log(this.recentBlogs[0].keyword)
        }, (error) => {
          console.log(error);
        });

    // Guarda Url para imagenes
    this.imageNames[0] = this.recentBlogs[0].keyword;
    this.encodedImageNames[0] = encodeURIComponent(this.imageNames[0]);
    this.imageUrl[0] = this.url + this.encodedImageNames[0] + this.extension;
    this.imageUrls.push(this.imageUrl[0].replace(/%20/g, ""));
    console.log(this.imageUrls);

  }

}
