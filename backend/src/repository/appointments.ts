import { prisma } from "../db/connection.ts";

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

export async function createRepoAppoin(data: createAppointments) {
    try {
        const appointments = await prisma.agendamento.create({
          data: {
            nome: `${data.nome}`,
            servico: `${data.servico}`,
            data: `${data.data}`,
            hora: `${data.hora}`,
          },
        });
        return appointments;
    } catch (error) {
        return false;
    }
}

export async function getRepoAppoin() {
    try {
        const allAppoin = await prisma.agendamento.findMany();
        return allAppoin;
    } catch (error) {
        return false;
    }
}

// Futura implementação
export async function updateRepoAppoin(data: updateAppointments) {
    return true
}


export async function deleteRepoAppoin(data: deleteAppointments) {
  const id = data.id  
  try {
      const tesasd = await prisma.agendamento.findUnique({
        where:{
          id
      }
      })
      if (tesasd) {
        await prisma.agendamento.delete({
          where:{
            id
          }
        })
      }
      return true
    } catch (error) {
      return error
    }
}
