
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../blog/blog.service';

@Injectable({
  providedIn: 'root',
})
export class BlogResolver implements Resolve<any> {
  constructor(private blogService: BlogService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const keyword = route.params['keyword'];
    return this.blogService.getBlogByKeyword(keyword);
  }
}
