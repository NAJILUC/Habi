package com.ufps.habilitacion.servicio;

import com.ufps.habilitacion.entidad.ConnectionToken;
import com.ufps.habilitacion.repositorio.ConnectionTokenRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConnectionTokenServicio {
    @Autowired
    private ConnectionTokenRepositorio connectionTokenRepositorio;

    public void registrar(ConnectionToken connectionToken) {
        connectionTokenRepositorio.save(connectionToken);
    }

    public boolean validar(ConnectionToken connectionToken) {
        return connectionToken.getState();
    }
}
