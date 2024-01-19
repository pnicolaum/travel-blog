import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {

  blog: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const title = params['title'];
      this.blogCreationService.getBlogByTitle(title).subscribe(
        (blog) => {
          this.blog = blog;
        },
        (error) => {
          console.error('Error al obtener el blog', error);
        }
      );
    });
  }

}
