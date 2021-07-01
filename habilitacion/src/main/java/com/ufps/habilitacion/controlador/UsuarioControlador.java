package com.ufps.habilitacion.controlador;

import com.ufps.habilitacion.entidad.Usuario;
import com.ufps.habilitacion.servicio.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/usuario")
public class UsuarioControlador {
    @Autowired
    private UsuarioServicio usuarioServicio;

    @PostMapping("/ingresar")
    public ResponseEntity<Map<String, Object>> ingresar(@RequestBody Usuario usuario) {
        Map<String, Object> response = new HashMap<>();
        if (usuarioServicio.ingresar(usuario)) {
            response.put("condicion", true);
            response.put("rol", usuario.getRole());
            response.put("usuario", usuario);
        } else {
            response.put("condicion", false);
        }
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PostMapping("/activar")
    public ResponseEntity<Usuario> activar(@RequestBody Usuario usuario) {
        usuarioServicio.activar(usuario);
        return new ResponseEntity(usuario, HttpStatus.OK);
    }
}
