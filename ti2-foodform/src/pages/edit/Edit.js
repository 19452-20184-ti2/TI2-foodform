import React from "react";
import { Form, Card, Button } from 'react-bootstrap'
import services from"../../services";
import AuthContext from "../../configs/authContext";

export default class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"", 
            description:"", 
            ingredients:"", 
            imgURL:"", 
            userID:""
        }
    }

    static contextType = AuthContext;

    componentDidMount = () => {
        this.apiCallGetPost(this.props.match.params.id);
    }

    apiCallGetPost = id => services.post.getOnePost(id)
        .then((value) => this.setState({
            title: value.title,
            description: value.description,
            ingredients: value.ingredients,
            imgURL: value.imgURL,
            userID: value.userID
        }))
        .catch((err) => this.setState({ error: err }));

    validateUser = id => {
        const {user} = this.context;
        return user._id === this.state.userID ? true : false;
    }

    handleSubmit = evt => {

        evt.preventDefault();
        services.post.updatePost(this.props.match.params.id, this.state);
    }

    render(){
        return(
            <div>
                {this.validateUser && 
                    <div>
                        <Form onSubmit={(evt)=>this.handleSubmit(evt)} >
                            <Card.Title>Edit your post</Card.Title>

                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control value={this.state.title} onChange={(evt)=>this.setState({title:evt.target.value})}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control value={this.state.description} onChange={(evt)=>this.setState({description:evt.target.value})}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Ingredients</Form.Label>
                                <Form.Control value={this.state.ingredients} onChange={(evt)=>this.setState({ingredients:evt.target.value})}/>
                                <Form.Text className="text-muted">Seperate each ingredient by the symbol " ; " at the end.</Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>ImgURL</Form.Label>
                                <Form.Control  value={this.state.imgURL} onChange={(evt)=>this.setState({imgURL:evt.target.value})}></Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" block>Submit</Button>
                        </Form>
                    </div>
                }
            </div>
        );
    }
}