import * as fromGetPost from './get-post.actions';

describe('loadGetPosts', () => {
  it('should return an action', () => {
    expect(fromGetPost.loadGetPosts().type).toBe('[GetPost] Load GetPosts');
  });
});
