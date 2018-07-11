import React from 'react'

const News = () => {
  return (
    <div className="blog-posts module grey-bg">
      <div className="section-title-wrapper">
            <div className="section-title">
                <h2>Recent News</h2>
                <p>What's going on in our Blog?</p>
            </div>
        </div>

      <div className="row">

            <div className="posts-wrapper">

                <div className="medium-4 small-12 columns">
                    <div className="post">
                        <div className="post-thumb">
                          <a href="#">
                            <img src="images/help/gallery3.jpg" alt="My Blog post" />
                            </a>
                        </div>
                        <div className="post-content">
                          <h4><a href="#">What is good about us?</a></h4>
                            <div className="post-meta"><strong>Date:</strong> 20, Dec, 2016 | <strong>Category:</strong> <a href="#">Campus</a> | <strong>Author:</strong> <a href="#">Ateeq</a></div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text ... <a href="#">Read More &raquo;</a></p>
                        </div>
                    </div>
              </div>

                <div className="medium-4 small-12 columns">
                    <div className="post">
                        <div className="post-thumb">
                          <a href="#">
                            <img src="images/help/gallery9.jpg" alt="My Blog post" />
                            </a>
                        </div>
                        <div className="post-content">
                          <h4><a href="#">Is this your Campus/Home</a></h4>
                            <div className="post-meta"><strong>Date:</strong> 20, Dec, 2016 | <strong>Category:</strong> <a href="#">Campus</a> | <strong>Author:</strong> <a href="#">Ateeq</a></div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text ... <a href="#">Read More &raquo;</a></p>
                        </div>
                    </div>
              </div>

                <div className="medium-4 small-12 columns">
                    <div className="post">
                        <div className="post-thumb">
                          <a href="#">
                            <img src="images/help/gallery7.jpg" alt="My Blog post" />
                            </a>
                        </div>
                        <div className="post-content">
                          <h4><a href="#">What's our next mission?</a></h4>
                            <div className="post-meta"><strong>Date:</strong> 20, Dec, 2016 | <strong>Category:</strong> <a href="#">Campus</a> | <strong>Author:</strong> <a href="#">Ateeq</a></div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text ... <a href="#">Read More &raquo;</a></p>
                        </div>
                    </div>
              </div>

            </div>

            <div className="load-more text-center">
              <a href="#" className="button primary bordered-dark">Load More...</a>
            </div>

        </div>

    </div>
  )
}

export default News
