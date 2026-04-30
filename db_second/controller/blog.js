import blog from "../models/blog.js";

export const createblog = async (req, res) => {
  const { userId } = req.params;

  try {
    const { title, content } = req.body;

    const newBlog = new blog({
      title,
      content,
      createdBy: userId,
    });

    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating blog",
      error: error.message,
    });
  }
};

export const getBlogByUserId = async (req, res) => {
  const { userId } = req.body;
  try {
    const getuser = await blog.find({ createdBy: userId });
    res.status(200).json({
      message: "this user is created the blog",
      getuser,
      success: true,
    });
  } catch (error) {
    console.log("showing error", error.message);
  }
};
