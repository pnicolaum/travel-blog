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
          console.log(this.recentBlogs)
        }, (error) => {
          console.log(error);
        });

    // Guarda Url para imagenes
    const imageName = blog.keyword; // nombre del titulo
    const encodedImageName = encodeURIComponent(imageName);
    const imageUrl = this.url + encodedImageName + this.extension;
    this.imageUrls.push(imageUrl.replace(/%20/g, ""));

  }

}
