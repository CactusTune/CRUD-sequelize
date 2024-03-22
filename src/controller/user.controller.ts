import express, { Request, Response, Router } from "express";
import { User } from "../db/model/user.model";
import { Op } from "sequelize";
import {
  createUserSchema,
  updateUserSchema,
} from "../validations/user.validations";
import { UserInterface } from "../interface/user.interface";

export const userRouter = Router();

userRouter.post(
  "/create-user",
  async (request: Request, response: Response) => {
    try {
      const { name, username, email, address, phone, website, company, age } =
        request.body;

      const check_user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (check_user) {
        return response.status(400).json({
          message: `User with email: ${email} already exists`,
        });
      }

      const { error } = createUserSchema.validate(request.body);

      if (error) {
        return response.status(400).json({
          message: "Validation error",
          details: error.details[0].message,
        });
      }
      const user_data = await User.create({
        name,
        username,
        email,
        address,
        phone,
        website,
        company,
        age,
      });

      return response.status(201).json(user_data);
    } catch (error: any) {
      return response
        .status(500)
        .json({ code: 500, success: false, message: error.message });
    }
  }
);

userRouter.patch(
  "/update-user/:user_id",
  async (request: Request, response: Response) => {
    try {
      const { user_id } = request.params;
      const { name, username, email, address, phone, website, company } =
        request.body;

      const parsedUserId = parseInt(user_id, 10);

      const check_email = await User.findOne({
        where: {
          email: email,
          id: {
            [Op.ne]: parsedUserId,
          },
        },
      });

      if (check_email) {
        return response.status(400).json({
          message: `User with email: ${email} already exists`,
        });
      }

      const check_user = await User.findOne({
        where: {
          id: user_id,
        },
      });

      if (!check_user) {
        return response.status(404).json({
          message: `User with id: ${user_id} to update not found`,
        });
      }
      const { error } = updateUserSchema.validate(request.body);

      if (error) {
        return response.status(400).json({
          message: "Validation error",
          details: error.details[0].message,
        });
      }
      const user_data = await User.update(
        {
          name,
          username,
          email,
          address,
          phone,
          website,
          company,
        },
        {
          where: {
            id: user_id,
          },
        }
      );

      return response
        .status(201)
        .json({ message: `User with id: ${user_id} updated successfully` });
    } catch (error: any) {
      return response
        .status(500)
        .json({ code: 500, success: false, message: error.message });
    }
  }
);

userRouter.get(
  "/get-user/:user_id",
  async (request: Request, response: Response) => {
    try {
      const { user_id } = request.params;

      const user = await User.findOne({
        where: {
          id: user_id,
        },
      });

      if (!user) {
        return response.status(404).json({
          message: `User with id: ${user_id} not found`,
        });
      }

      return response.status(201).json({
        message: `User with id: ${user_id} fetched successfully`,
        data: user,
      });
    } catch (error: any) {
      return response
        .status(500)
        .json({ code: 500, success: false, message: error.message });
    }
  }
);

userRouter.get("/get-users", async (request: Request, response: Response) => {
  try {
    const users = await User.findAll();

    return response
      .status(201)
      .json({ message: `Users successfully fetched`, data: users });
  } catch (error: any) {
    return response
      .status(500)
      .json({ code: 500, success: false, message: error.message });
  }
});

userRouter.delete(
  "/delete-user/:user_id",
  async (request: Request, response: Response) => {
    const { user_id } = request.params;
    try {
      const user = await User.findOne({
        where: {
          id: user_id,
        },
      });

      if (!user) {
        return response.status(404).json({
          message: `User with id: ${user_id} not found`,
        });
      }
      const delete_user = await User.destroy({
        where: {
          id: user_id,
        },
      });

      const user_detail: UserInterface = user.toJSON() as UserInterface;

      return response.status(201).json({
        message: `User with username: ${user_detail.username} deleted`,
      });
    } catch (error: any) {
      return response
        .status(500)
        .json({ code: 500, success: false, message: error.message });
    }
  }
);

userRouter.delete(
  "/delete-users",
  async (request: Request, response: Response) => {
    try {
      await User.destroy();

      return response.status(201).json({ message: `All Users deleted` });
    } catch (error: any) {
      return response
        .status(500)
        .json({ code: 500, success: false, message: error.message });
    }
  }
);
