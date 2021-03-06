import React from "react";
import { Form, Card, Button } from 'react-bootstrap'
import services from"../../services";
import AuthContext from "../../configs/authContext";
import "./Upload.css";

export default class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"", 
            discription:"", 
            ingredients:"", 
            imgURL:"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6", 
            userID:""
        };
    }
    
    /**
     * once the event gets triggered it will create a post with
     * the parameters filled the way the user choose
     * and proceed to redirect the user to its respective route.
     */
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
            <div className="uploadContainer">
                <Card style = {{width:"24rem"},{border:"15px solid white"}}>
                <Form onSubmit={(evt)=>this.handleSubmit(evt)} >
                    <Card.Title>Create your post</Card.Title>

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={(evt)=>this.setState({title:evt.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(evt)=>this.setState({description:evt.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control onChange={(evt)=>this.setState({ingredients:evt.target.value})}/>
                        <Form.Text className="text-muted">Seperate each ingredient by the symbol " ; " at the end.</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>ImgURL</Form.Label>
                        <Form.Control value={this.state.imgURL} onChange={(evt)=>this.setState({imgURL:evt.target.value})}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(evt)=>this.setState({userID: user._id})} block>Sumbit</Button>
                </Form>
                </Card>
            </div>
        );
    }
}