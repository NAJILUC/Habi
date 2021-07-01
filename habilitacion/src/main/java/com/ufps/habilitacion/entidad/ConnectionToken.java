package com.ufps.habilitacion.entidad;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "connectiontoken")
public class ConnectionToken implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String host;
    private String userdb;
    private String pass;
    private String db;
    private String token;
    private Boolean port;
    @ManyToOne
    @JoinColumn(name = "user")
    private Usuario user;
    private Boolean state;
    @ManyToOne
    @JoinColumn(name = "type")
    private TypeDB type;
    @OneToMany(mappedBy = "conexion")
    private List<Reporte> reporte;
}
