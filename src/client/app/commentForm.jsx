import React from 'react';
import {render} from 'react-dom';
import Comment from './comment.jsx';
class CommentForm extends React.Component {

    render () {
        return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
            <label> Join the discussion</label>
            <div className="comment-form-fields">
                <input placeholder="Name:" ref={(input) => this._author = input}/>
                <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}></textarea>
            </div>
            <div className="comment-form-actions">
                <button type="submit">
                    Post comment
                </button>
            </div>
        </form>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();

        let author = this._author;
        let body = this._body;

        this.props.addComment(author.value, body.value);
    }
    
    _getComments() {

        const commentList = [
            { id: 1, author: 'Morgan', body: 'Great Post!'},
            { id: 2, author: 'Mr. V', body: 'Spamming here'}
        ];

        return commentList.map((comment) => {
            return (
                <Comment 
                    author={comment.author} body={comment.body} key={comment.id}/>);
        });
    }

    _getCommentsTtile(commentCount){
        if (commentCount === 0) {
            return 'No comments';
        } else if(commentCount === 1) {
            return '1 comment';
        } else {
            return '${commentCount} comments';
        }
    }
}


render(<CommentBox />, document.getElementById('story-app'));
