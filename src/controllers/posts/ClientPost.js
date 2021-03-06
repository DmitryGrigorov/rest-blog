import ClientUser from '../user/ClientUser';

export default class ClientPost {
  constructor(post, author, likes, dislikes) {
    const objectPost = post.toObject();
    const normalizeAuthor = new ClientUser(author);

    return {
      ...objectPost,
      author: normalizeAuthor,
      likes,
      dislikes
    };
  }
};
