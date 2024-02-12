import { Component } from '@angular/core';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';


@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})

export class BlogDeleteComponent {

  keyword = "";

  constructor(
    private blogCreationService: BlogCreationService,
  ) { }

  deleteBlog() {

  }

}
