import {USERS} from './users';

export const POSTS = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMGRhdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    user: USERS[0].user,
    likes: 7880,
    caption:
      'Хэдэн хоног оюутны ширээнд сууж, оюундаа, зүрх сэтгэлдээ нар, салхи оруулав.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'theqazma',
        comment: 'Wow! This build looks fire. Super excited about',
      },
      {
        user: 'amaanath.dev',
        comment: "Once I wake up, I'll finally be ready to code this up! ",
      },
    ],
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMGRhdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    user: USERS[1].user,
    likes: 7880,
    caption: 'Train Ride to Hogwards.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'theqazma',
        comment: 'Wow! This build looks fire. Super excited about',
      },
      {
        user: 'amaanath.dev',
        comment: "Once I wake up, I'll finally be ready to code this up! ",
      },
    ],
  },
];
