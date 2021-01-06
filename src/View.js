import React from 'react';
import './App.css';
import SocialCard from './SocialCard';

class View extends React.Component {

  buildPosts() {
    return this.props.posts.map((current,i) => (
      <SocialCard key={i} postId={current.postid} id={current.id} img={current.img} text={current.text} likes={current.likes} likeaction={this.props.likeaction} />
    )
    )
  }

  render() {
    return (
      <>
        <div>
          {this.buildPosts()}
        </div>
        <div id="att">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
      </>
    );
  }
}

export default View;
