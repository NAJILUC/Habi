package com.ufps.habilitacion.repositorio;

import com.ufps.habilitacion.entidad.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepositorio extends CrudRepository<Usuario, Integer> {
}
