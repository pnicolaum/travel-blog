import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogCreationService } from 'src/app/core/services/blog-creation/blog-creation.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  blog: any;

  constructor(
    private route: ActivatedRoute,
    private blogCreationService: BlogCreationService

  ) { }

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
