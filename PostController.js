import PostServices from "./PostServices.js";

class PostController {
  async create(req, res) {
    try {
      console.log(req.files);
      const post = await PostServices.create(req.body,req.files.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostServices.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await PostServices.getOne(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      const updatedPost = await PostServices.update(post);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedPost = await PostServices.delete(id);
      return res.json(deletedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new PostController();
