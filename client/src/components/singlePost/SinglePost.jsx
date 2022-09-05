import React from 'react';
import './singlePost.css';

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="row">
                <img src="https://images.pexels.com/photos/6633446/pexels-photo-6633446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-fluid image' />
                <div className="head">
                    <h4 className="single-header">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                    <div className="icons">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash"></i>
                    </div>
                </div>
                <div className="editor">
                    <h5 className="author">Author: <b>Remilekun</b></h5>
                    <div className="date">1 day ago</div>
                </div>
                <div className="article">
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam quaerat modi officia officiis qui, reiciendis sit consectetur distinctio praesentium totam porro tempora ipsum nam esse labore a saepe voluptatum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perferendis totam quia delectus voluptates magni animi cumque unde dignissimos temporibus, voluptatem tempore veritatis. Numquam impedit rem velit error? Provident tenetur exercitationem ipsa quibusdam deleniti nam optio impedit voluptates, consectetur officiis aliquam, sit, excepturi atque. Culpa adipisci aliquam deleniti. Repellendus modi officia tempore libero, architecto voluptatibus doloribus quas iure eos. Soluta vitae sunt laudantium voluptate magni repudiandae harum cum nulla omnis?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, amet fugiat! Vero voluptates cupiditate laudantium soluta illo tenetur aut reiciendis, unde tempora eos earum, adipisci ad! Soluta quas voluptates tempore eos illum distinctio iure est eveniet ab rerum suscipit, odit nostrum architecto dolorum corrupti eum et? Commodi perferendis eum laudantium eius nostrum dolor tempore provident dolorem dolores? Veniam dignissimos labore nihil eum neque mollitia corrupti repudiandae aliquam nulla hic delectus cumque modi ut, veritatis similique, totam voluptate repellendus? Necessitatibus neque obcaecati vitae, reprehenderit a cumque accusamus! Voluptatibus omnis repellat quae similique. Debitis porro commodi adipisci odit error, beatae reprehenderit nihil! </p>
                </div>
            </div>
        </div>
    )
}
