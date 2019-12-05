import React from 'react'
import {Card, Button} from 'react-bootstrap'
import cardsStyles from "./post.module.css";

const Post = props => (
  <div className="p-3">
    <Card className={cardsStyles.cards}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
        <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />

        <Button variant="primary" href={props.readMore}>
          Read more...
        </Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post;