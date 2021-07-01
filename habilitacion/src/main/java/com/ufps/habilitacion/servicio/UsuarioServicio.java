package com.ufps.habilitacion.servicio;

import com.ufps.habilitacion.entidad.Usuario;
import com.ufps.habilitacion.repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServicio {
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    public boolean ingresar(Usuario usuario) {
        List<Usuario> usuarios = (List<Usuario>) usuarioRepositorio.findAll();
        for (Usuario u : usuarios) {
            if (u.getUsuario().equals(usuario.getUsuario())
                    && u.getPass().equals(usuario.getPass())
                    && usuario.getState()) {
                return true;
            }
        }
        return false;
    }

    public void activar(Usuario usuario) {
        usuario.setState(true);
        usuarioRepositorio.save(usuario);
    }
}

