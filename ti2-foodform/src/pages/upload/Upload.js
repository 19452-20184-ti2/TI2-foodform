import React from "react";
import { Form, Card, Button } from 'react-bootstrap'
import services from"../../services";
import AuthContext from "../../configs/authContext";


export default class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state = {title:"", discription:"", ingredients:"", imgURL:"", userID:"" };
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        services.post.createPost(this.state)
            .then(()=>{this.props.history.push("/")
        });
    }

    static contextType = AuthContext;
    
    render(){
        const {user} = this.context;
        const { title , description, ingredients, imgURL } = this.state;
        return(
            <div>
                <Form onSubmit = {(evt)=>this.handleSubmit(evt)}>
                    <Card.Title>Create your post</Card.Title>

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={(evt)=>this.setState({title:evt.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={(evt)=>this.setState({description:evt.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control value={ingredients} onChange={(evt)=>this.setState({ingredients:evt.target.value})}/>
                        <Form.Text className="text-muted">Seperate each ingredient by the symbol " ; ".</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>ImgURL</Form.Label>
                        <Form.Control value={imgURL} onChange={(evt)=>this.setState({imgURL:evt.target.value})}></Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(evt)=>this.setState({userID: user._id})} block>Register</Button>
                </Form>
            </div>
        );
    }
}