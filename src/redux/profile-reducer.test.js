import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my firs post!', likesCount: 23},
        {id: 3, message: 'Bla bla', likesCount: 5},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {
    // test data
    const action = addPostActionCreator('it-kamasutra.com');

    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    // test data
    const action = addPostActionCreator('it-kamasutra.com');
    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

it('after deleting length of posts should be decrement', () => {
    // test data
    const action = deletePost(1);
    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length of posts shouldn't be decrement if id is incorrect`, () => {
    // test data
    const action = deletePost(10);
    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(4);
});
