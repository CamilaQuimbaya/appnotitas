import { Injectable } from '@angular/core';
import api from './api-instance';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  login(correo: string, contrasena: string) {
    return api.post('/auth/login', { correo, contrasena });
  }

  registrar(nombre: string, correo: string, contrasena: string) {
    return api.post('/auth/registrar', { nombre, correo, contrasena });
  }

  obtenerNotas() {
    return api.get('/notas');
  }

  obtenerNota(id: string) {
    return api.get(`/notas/${id}`);
  }

  crearNota(titulo: string, nota: string) {
    return api.post('/nota', { titulo, nota });
  }

  actualizarNota(id: string, titulo: string, nota: string) {
    return api.put(`/notas/${id}`, { titulo, nota });
  }

  eliminarNota(id: string) {
    return api.delete(`/notas/${id}`);
  }
}
