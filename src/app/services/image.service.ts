import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  //private imagesUrl = 'api/images';
  private imagesUrl = 'http://localhost:3001/api/images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imagesUrl);
  }

  getImage(id: number): Observable<Image> {
    const url = `${this.imagesUrl}/${id}`;
    return this.http.get<Image>(url);
  }

}
