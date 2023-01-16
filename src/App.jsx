import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/32752890?v=4',
      name: 'Leandro Citro',
      role: 'Full Stack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-12-21 12:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/89922059?v=4',
      name: 'Bernardo Nacif',
      role: 'Full Stack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-12-21 08:00'),
  },
  
];

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main> 
          {posts.map(post => {
            return (
              <Post key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
            )
          })}
        </main>
      </div>  
     </div>
     
    
  )
}



