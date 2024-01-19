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

  constructor(private route: ActivatedRoute, private blogCreationService: BlogCreationService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const title = params['title'];
      // Realiza una solicitud HTTP para obtener los detalles del blog por el título
      this.blogCreationService.getBlogByTitle(title).subscribe((blog) => {
        this.blog = blog;
      });
    });
  }

}
