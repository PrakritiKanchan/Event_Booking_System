import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import prisma from "../config/prisma.config";
import { ApiResponse } from "../type/response.type";

/**
 * checks if a user exists or not by email
 */
const checkUserExistsByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findFirst({ where: { email } });
};

/**
 * checks if a user exists or not by id
 */
const checkUserExistsById = async (id: string): Promise<User | null> => {
  return await prisma.user.findFirst({ where: { id } });
};

