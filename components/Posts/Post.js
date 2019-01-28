// import PostLink from './PostLink';
import Post from '../Post';

const Posts = ({post}) => {
  return (
    <section className="blog-post style-two pad-75">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    {Post.map(() => {
                      return;
                    }
                    , [])}
                </div>
            </div>
            {/* <!-- load more --> */}
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="row">
                        <div className="col-md-4 col-xs-2">
                            <a href="#" className="left-button"><img src="images/left-botton.png" alt="left-button"/></a>
                        </div>
                        <div className="col-md-4 col-xs-8 text-center">
                            <ul className="page-nav text-center list-inline">
                                <li className="list-inline-item"><a className="active" href="#">1</a></li>
                                <li className="list-inline-item"><a href="#">2</a></li>
                                <li className="list-inline-item"><a href="#">3</a></li>
                                <li className="list-inline-item"><a href="#">4</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-2 text-right">
                            <a href="#" className="left-button"><img src="images/right-button.png" alt="right-button"/></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- load more --> */}
        </div>
    </section>
  );
}
console.log(Posts);
export default Posts;