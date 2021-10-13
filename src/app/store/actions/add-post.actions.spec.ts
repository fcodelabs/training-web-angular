import * as fromAddPost from './add-post.actions';

describe('loadAddPosts', () => {
  it('should return an action', () => {
    expect(fromAddPost.loadAddPosts().type).toBe('[AddPost] Load AddPosts');
  });
});
