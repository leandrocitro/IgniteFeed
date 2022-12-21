import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}> 
            <img src="https://avatars.githubusercontent.com/u/32752890?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}>
                        <strong> Leandro Citro </strong>
                        <time title="20 de Dezembro às 20:04" dateTime="2022-05-11 20:04"> Cerca de 1 h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash size={20} />
                    </button>

                    </header>
                    <p> Muito bom Leandro, Parabéns!</p>
                    
                </div>

                <footer>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </footer>
            </div>

        </div>
    )
}