import React from 'react';
import CommentBox from '../components/comment-box';

const picture = require('../images/picture.jpg');

export default class PicturePage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article article--picture">
            <div className="article--picture-author">
              Picture by <strong>@morganmccircuit</strong>
            </div>

            <div className="article--picture-img">
              <img src={picture} />
            </div>
          </article>
        </div>

        <CommentBox apiUrl="api/pictures/comments.json" />
      </div>
    )
  }
}
