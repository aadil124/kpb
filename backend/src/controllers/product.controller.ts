import { Request, Response } from "express";

import Product from "../models/product.model";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: "Failed to create product",
    // });
  }
};