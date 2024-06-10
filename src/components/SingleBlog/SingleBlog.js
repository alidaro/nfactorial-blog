import React from 'react';
import "./SingleBlog.scss";
import {BiUser, BiCommentDots} from 'react-icons/bi';
import {MdOutlineAddReaction} from "react-icons/md";
import author from "../../assets/images/author.png";
import Comment from '../Comment/Comment';
import { useBlogsContext } from '../../context/blogsContext';
import {Link} from "react-router-dom";
import Loader from '../Loader/Loader';

const SingleBlog = ({blog, user, comments}) => {
  const {tempBlogs, singleBlogLoading, singleBlogError} = useBlogsContext();

  if(singleBlogLoading){
    return(<Loader />);
  } 


  return (
    <div className='blog-single grid'>
        <div className='blog-single-l'>
          <div className='blog-details'>
            <div className='blog-info flex align-center'>
              <div className='blog-info-item flex align-center'>
                <BiUser className='text-mid-blue' />
                <span className='blog-info-item-text font-rubik fw-5'>Arman Suleimenov</span>
              </div>
              <div className='blog-info-item flex align-center'>
              </div>
              <div className='blog-info-item flex align-center'>
              </div>
            </div>

            <h2 className='blog-title text-dark-blue'>{blog?.title}</h2>
            <p className='blog-text'>{blog?.body}</p>
            <div className='blog-tags flex align-item my-4'>
              <div className='blog-tags-list flex align-center'>
                
              </div>
            </div>
          </div>
          
          <div className='blog-author my-5'>
            <div className='blog-author-l'>
              <img src = {author} alt = "" />
            </div>
            <div className='blog-author-r'>
              <div className='fs-16 fw-3 author-name'>Arman Suleimenov</div>
              <div className='fs-16 fw-3 author-email'>Email: armansu@gmail.com</div>
              <div className='fs-16 fw-3 author-username'>Username:armansu</div>
              <div className='fs-16 fw-3 author-address'>Address: Almaty</div>
            </div>
          </div>
          <div className='blog-comments'>
            <h2 className='font-rubik my-3 fw-6'>Comments (пока не научился добавлять)</h2>
          </div>
        </div>

        <div className='blog-single-r'>
          <div className='recent-blogs'>
            <h2 className='font-rubik my-3 fw-6'>Recent News</h2>
            <div className='recent-blogs-list grid'>
              {
                tempBlogs.slice(0, 5).map(blog => {
                  return (
                    <div className='recent-blogs-item' key = {blog.id}>
                      <Link to = {`/blog/${blog.id}`}>
                        <h3>{blog?.title}</h3>
                      </Link>
                      <div className='flex align-center'>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingleBlog