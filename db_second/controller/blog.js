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
