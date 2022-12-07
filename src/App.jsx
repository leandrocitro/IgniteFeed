import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main> 
          <Post
            author="Leandro Citro"
            content="Sou tricolor de coração"/>

          <Post
            author="Beatriz Citro"
            content="Sou Lindona"/> 
        </main>
      </div>  
     </div>
     
    
  )
}



