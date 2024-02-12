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

          //guarda urls de cada imagen
          for (let i = 0; i < 5; i++) {
            this.imageNames[i] = this.recentBlogs[i].keyword;
            this.encodedImageNames[i] = encodeURIComponent(this.imageNames[i]);
            this.imageUrl[i] = this.url + this.encodedImageNames[i] + this.extension;
            this.imageUrls.push(this.imageUrl[i].replace(/%20/g, ""));
          }

          console.log(this.recentBlogs);

        }, (error) => {
          console.log(error);
        });



  }

}
