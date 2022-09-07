import React from 'react';

import BlogSidebar from './blog-sidebar';
import PostList from './post-list';
import styles from './styles.module.scss';

interface IProps {
  category?: string;
}

const Category: React.FC<IProps> = ({category}) => {
  return (
    <div className={styles.post}>
      <div className="container">
        <div className="inner">
          <div className="left">
            <PostList category={category} />
          </div>
          <div className="right">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
