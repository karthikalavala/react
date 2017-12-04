import React from 'react';
import {render} from 'react-dom';
import Comment from './comment.jsx';
class CommentBox extends React.Component {

    constructor (){
        super();

        this.state = {
            showComments: false,
          comments = [
            { id: 1, author: 'Morgan', body: 'Great Post!'},
            { id: 2, author: 'Mr. V', body: 'Spamming here'}
            ]
        };
    }
    render () {
        const comments = this._getComments();
        let commentNodes;
        let buttonText = 'Show comments';
        if(this.state.showComments) {
            buttonText = 'Hide comments';
            commentNodes = <div className="comment-list"> {comments} </div>;
        }
        return (
            <div className="comment-box">
                <CommentForm addComment={this._addComment.bind(this)} />
                <h3>Comments</h3>
                <h4 className="comment-count">{this._getCommentsTtile(comments.length)}</h4>
                <button onClick={this._handleClick.bind(this)}>Show comments</button>
                {commentNodes}
            </div>
        );
    }

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length+1,
            author,
            body
        };
        this.setState({comments : this.state.comments.concat(comment)});
    }

    _handleClick() {
        this.setState({
            showComments : !this.state.showComments
        });
    }
    
    _getComments() {

        this.state.comments.map((comment) => {
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
