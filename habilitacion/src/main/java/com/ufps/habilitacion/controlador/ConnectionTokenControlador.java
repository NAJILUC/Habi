package com.ufps.habilitacion.controlador;

import com.ufps.habilitacion.entidad.ConnectionToken;
import com.ufps.habilitacion.servicio.ConnectionTokenServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/token")
public class ConnectionTokenControlador {

    @Autowired
    private ConnectionTokenServicio connectionTokenServicio;

    @PostMapping("/registrar")
    public void registrar(@RequestBody ConnectionToken connectionToken) {
        connectionTokenServicio.registrar(connectionToken);
    }

    @PostMapping("/validar")
    public boolean validar(@RequestBody ConnectionToken connectionToken) {
        return connectionTokenServicio.validar(connectionToken);
    }
}
