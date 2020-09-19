import React from "react";
import { Form, Card, Button } from 'react-bootstrap'
import services from"../../services";
import AuthContext from "../../configs/authContext";
import "../upload/Upload.css";

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

    /**
     * Once all the elements of the page are rendered
     * it will run apiCallGetPost
     */
    componentDidMount = () => {
        this.apiCallGetPost(this.props.match.params.id);
    }

    /**
     * Will request the ID of the post the user choose to edit to the API
     * @param {String} id  - id of the post
     * Gets the following values:
     * @param {String} title - title of the post
     * @param {String} description - description of the post
     * @param {String} ingredients - title of the post
     * @param {String} imgURL - the URL of the image shown in the post
     * @param {String} userID - ID of the user who posted it
     */
    apiCallGetPost = id => services.post.getOnePost(id)
        .then((value) => this.setState({
            title: value.title,
            description: value.description,
            ingredients: value.ingredients,
            imgURL: value.imgURL,
            userID: value.userID
        }))
        .catch((err) => this.setState({ error: err }));

    /**
     * checks if both IDs r the same so that the user
     * can be validated
     * @param {String} _id - ID of the post
     * @returns {Boolean} - if the _id is the same as the userID
     */
    validateUser = id => {
        const {user} = this.context;
        return user._id === this.state.userID ? true : false;
    }
    /**
     * once the event gets triggered it will match update its parameters
     * and proceed to redirect the user to its respective route.
     */
    handleSubmit = evt => {

        evt.preventDefault();
        services.post.updatePost(this.props.match.params.id, this.state)
        .then(() => this.props.history.push(`/post/${this.props.match.params.id}`))
    }

    render(){
        return(
            <div>
                {this.validateUser && 
                    <div className="uploadContainer">
                    <Card style = {{width:"24rem"},{border:"15px solid white"}}>
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
                    </Card>
                    </div>
                }
            </div>
        );
    }
}