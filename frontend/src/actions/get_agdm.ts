"use server"
export async function getAgdm() {
  const agdms = await fetch("http://localhost:3001/agendamentos/");
  return await agdms.json();
}
