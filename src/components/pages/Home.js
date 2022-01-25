import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Post from "../features/Post";
import { getAllPosts} from '../../redux/postRedux';

const Home= () => {
    const posts = useSelector((state) => getAllPosts(state));
    return (
        <div className='Home'>
            <section className='posts-navi d-flex justify-content-between'>
                <h1>All posts</h1>
                <Button variant='outline-info' href='/post/add'>
                    Add post
                </Button>
            </section>
            <section className='posts'>
                <div className='container'>
                    <div className='row'>
                        {posts.map((post) => (
                        <Post key={post.id} {...post} /> ))}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;