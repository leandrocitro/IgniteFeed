
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src ="https://avatars.githubusercontent.com/u/32752890?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong> Leandro Citro </strong>
                        <span> Web Developer </span>
                    </div>
                </div>

                <time title="07/12/2022" dateTime="2022-12-07 23:00:30"> Publicado há 1h</time>
            </header>

<div className={styles.content}>
    <p>Fala galeraa 👋</p>

       <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

        <p><a href="">jane.design/doctorcare </a></p>

       <p> 
        <a href="">#novoprojeto #nlw #rocketseat</a>{' '}
        <a href="">#nlw</a>{' '}
        <a href="">#rocketseat</a>
        </p>
</div>

<form className={styles.commentForm}>
<strong>Deixe seu feedback</strong>
<textarea 
    placeholder="Deixe um comentário"
/>

<footer>
    <button type="submit">Publicar</button>
</footer>

</form>

<div className={'styles.commentList'}></div>
<Comment />
<Comment />
<Comment />


        </article>
    )
}