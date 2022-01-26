import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getSinglePost } from "../../redux/postRedux";
import ShowModal from "../common/ShowModal";
import Post from "../features/Post";
import { NavLink } from "react-router-dom";

const SinglePost = () => {
    const { id } = useParams();
    const post = useSelector((state) => getSinglePost(state, id)).shift();
    if (!id) return <Navigate to='/' />;
    if (!post) return <Navigate to='/' />;

    return (
        <div className='single-post d-flex justify-content-center'>
            <section className='post col-8 mx-1'>
                <div className='container'>
                    <div className='row'>
                        <Post key={post.id} {...post} />
                    </div>
                </div>
            </section>
            <Button as={NavLink} className='col-1 algin-self-start mx-1' variant='outline-success' to={`/post/edit/${post.id}`}>
                Edit
            </Button>

            <ShowModal postId={post.id}></ShowModal>
        </div>
    )
};

export default SinglePost