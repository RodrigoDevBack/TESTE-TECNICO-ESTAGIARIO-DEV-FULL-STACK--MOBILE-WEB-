import type { Request, Response } from "express";

import {
  createRepoAppoin,
  getRepoAppoin,
  deleteRepoAppoin,
} from "../repository/appointments.ts";

interface createAppointments {
  nome: string;
  servico: string;
  data: string;
  hora: string;
}

interface updateAppointments {
  id: number;
  nome?: string;
  servico?: string;
  data?: string;
  hora?: string;
}

interface deleteAppointments {
  id: number;
}

export async function createAppoin(
  req: Request<{}, any, createAppointments>,
  res: Response
) {
  try {
    const result = await createRepoAppoin(req.body);
    if (!result) {
      return res.status(400).json("falha ao tentar criar agendamento.");
    }
    return res.status(201).json(req.body);
  } catch (error) {
    return res.status(400).json("Falha na requisição.");
  }
}

export async function getAppoin(req: Request, res: Response) {
  try {
    const response = await getRepoAppoin();
    if (!response) {
      return res.status(404).json("falha ao tentar criar agendamento.");
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json("Falha na requisição. Erro: " + error);
  }
}

export async function updateAppoin(
  req: Request<{}, any, updateAppointments>,
  res: Response
) {
  try {
    return res.status(200).json("In development");
  } catch (error) {
    return res.status(400).json("Falha misteriosa. Erro: " + error);
  }
}

export async function deleteAppoin(
  req: Request<{}, any, deleteAppointments>,
  res: Response
) {
  try {
    const response = await deleteRepoAppoin(req.body);
    if (!response) {
      return res.status(400).json("falha ao tentar apagar agendamento.");
    }
    return res.status(201).json(req.body);
  } catch (error) {
    return res.status(400).json("Falha na requisição.Erro: " + error);
  }
}
