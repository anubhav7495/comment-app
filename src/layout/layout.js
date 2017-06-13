import React from 'react';
import { Route, Link } from 'react-router-dom';

import BlogPage from '../pages/blog';
import PicturePage from '../pages/picture';
import VideoPage from '../pages/video';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="top-menu">
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/picture">Picture</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
          </ul>
        </div>

        <Route path="/blog" component={BlogPage} />
        <Route path="/picture" component={PicturePage} />
        <Route path="/video" component={VideoPage} />
      </div>
    )
  }
}
