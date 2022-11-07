import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from '../interfaces/user';
import { Image } from '../interfaces/image';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {

  createDb()  {
    const users: User[] = [
      {_id: 1, firstName: 'Valiant', lastName: 'Toro', username: '@torito10', profilePic: 9},
      {_id: 2, firstName: 'Ginebra', lastName: 'Barrios', username: '@ginebra', profilePic: 13},
      {_id: 3, firstName: 'Dulas', lastName: 'Sarabia', username: '@dsarabia', profilePic: 10},
      {_id: 4, firstName: 'Reynaldo', lastName: 'Rincón', username: '@reyrincon', profilePic: 12}
    ];

    const images: Image[] = [
      { _id: 1, src: '../../assets/posts/perro1.jpg', description: 'dogs'},
      { _id: 2, src: '../../assets/posts/perro2.jpg', description: 'dogs'},
      { _id: 3, src: '../../assets/posts/perro3.jpg', description: 'dogs'},
      { _id: 4, src: '../../assets/posts/perro4.jpg', description: 'dogs'},
      { _id: 5, src: '../../assets/posts/perro5.jpg', description: 'dogs'},
      { _id: 6, src: '../../assets/posts/perro6.jpg', description: 'dogs'},
      { _id: 7, src: '../../assets/posts/capybara1.jpg', description: 'capybara'},
      { _id: 8, src: '../../assets/posts/capybara2.jpg', description: 'capybara'},
      { _id: 9, src: '../../assets/profile-pics/cesar-rincon.jpg', description: 'people'},
      { _id: 10, src: '../../assets/profile-pics/michael-dam.jpg', description: 'people'},
      { _id: 11, src: '../../assets/profile-pics/oguz-yagiz-kara.jpg', description: 'people'},
      { _id: 12, src: '../../assets/profile-pics/podpros.jpg', description: 'people'},
      { _id: 13, src: '../../assets/profile-pics/toa-heftiba.jpg', description: 'people'},
      { _id: 14, src: '../../assets/posts/capybara3.jpg', description: 'capybara'},
      { _id: 15, src: '../../assets/posts/capybara4.jpg', description: 'capybara'},
      { _id: 16, src: '../../assets/posts/capybara5.jpg', description: 'capybara'},
      { _id: 17, src: '../../assets/posts/capybara6.jpg', description: 'capybara'},
      { _id: 18, src: '../../assets/posts/capybara7.jpg', description: 'capybara'},
      { _id: 19, src: '../../assets/posts/helado1.jpg', description: 'helado'},
      { _id: 20, src: '../../assets/posts/helado2.jpg', description: 'helado'},
      { _id: 21, src: '../../assets/posts/helado3.jpg', description: 'helado'},
      { _id: 22, src: '../../assets/posts/helado4.jpg', description: 'helado'},
      { _id: 23, src: '../../assets/posts/helado5.jpg', description: 'helado'},
      { _id: 24, src: '../../assets/posts/helado6.jpg', description: 'helado'},
      { _id: 25, src: '../../assets/posts/helado7.jpg', description: 'helado'},
      { _id: 26, src: '../../assets/posts/paisaje1.jpg', description: 'paisaje'},
      { _id: 27, src: '../../assets/posts/paisaje2.jpg', description: 'paisaje'},
      { _id: 28, src: '../../assets/posts/paisaje3.jpg', description: 'paisaje'},
      { _id: 29, src: '../../assets/posts/paisaje4.jpg', description: 'paisaje'}
    ];

    const posts: Post[] = [
      { _id: 1, userId: 1, imageId: 1},
      { _id: 12, userId: 2, imageId: 25},
      { _id: 15, userId: 3, imageId: 6},
      { _id: 3, userId: 1, imageId: 14},
      { _id: 17, userId: 3, imageId: 19},
      { _id: 4, userId: 1, imageId: 15},
      { _id: 21, userId: 4, imageId: 8},
      { _id: 5, userId: 1, imageId: 23},
      { _id: 19, userId: 3, imageId: 28},
      { _id: 7, userId: 1, imageId: 29},
      { _id: 8, userId: 2, imageId: 3},
      { _id: 10, userId: 2, imageId: 16},
      { _id: 6, userId: 1, imageId: 24},
      { _id: 23, userId: 4, imageId: 21},
      { _id: 13, userId: 2, imageId: 26},
      { _id: 16, userId: 3, imageId: 18},
      { _id: 20, userId: 4, imageId: 7},
      { _id: 9, userId: 2, imageId: 4},
      { _id: 14, userId: 3, imageId: 5},
      { _id: 22, userId: 4, imageId: 20},
      { _id: 18, userId: 3, imageId: 27},
      { _id: 2, userId: 1, imageId: 2},
      { _id: 11, userId: 2, imageId: 17},
      { _id: 24, userId: 4, imageId: 22}
    ];

    return {users, images, posts};
  }
}
