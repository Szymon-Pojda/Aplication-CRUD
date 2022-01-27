import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../redux/postRedux";
import PostForm from "./PostForm";
import { editPost } from "../../redux/postRedux";

const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector((state) => getSinglePost(state, id)).shift();

    if (!id) return <Navigate to='/' />;

    const handleSubmit = (post) => {
        dispatch(editPost({ ...post, id }));
        navigate('/');
    }

    return (
        <PostForm
            action={handleSubmit}
            actionText="Add post"
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            content={post.content} />

    );
};

export default EditPostForm;