import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR'
import { CodesandboxLogo } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post muito bacana!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm' h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
        
    });

    function handleCreateNewComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;
        
        if(newCommentText == ''){
            console.log('Digite um comentário')
        } else {
            setComments([...comments, newCommentText])
            setNewCommentText('');
        } 

        //event.target.comment.value = '';
       
    }

    function handleNewCommentChange () {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
        
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório! ');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })


        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src ={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> 
                    {publishedDateRelativeToNow}
                </time>
            </header>

<div className={styles.content}>
    {content.map(line => {
        if (line.tupe == 'paragraph') {
            return <p key={line.content}>{line.content}</p>
        } else if (line.type == 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
        }
        
    })}
</div>

<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
<strong>Deixe seu feedback</strong>
<textarea 
    name="comment"
    placeholder="Deixe um comentário"
    value={newCommentText}
    onChange={handleNewCommentChange}
    onInvalid={handleNewCommentInvalid}
    required
/>

<footer>
    <button type="submit" disabled= {newCommentText.length === 0}>
        Publicar
    </button>
</footer>

</form>

<div className={'styles.commentList'}></div>
{comments.map(comment => {
    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
})}


        </article>
    )
}