import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content , onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        console.log('Comentário deletado');

        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}> 
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/32752890?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}>
                        <strong> Leandro Citro </strong>
                        <time title="20 de Dezembro às 20:04" dateTime="2022-05-11 20:04"> Cerca de 1 h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24} />
                    </button>

                    </header>
                    <p>{content}</p>
                    
                </div>

                <footer>
                    <button onClick = {handleLikeComment}title="Aplaudir">
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>

        </div>
    )
}