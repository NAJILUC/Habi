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
public class Usuario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String usuario;
    private String email;
    private String pass;
    @ManyToOne
    @JoinColumn(name = "role")
    private Rol role;
    private Boolean state;
    @OneToMany(mappedBy = "user")
    private List<ConnectionToken> connectionToken;
}
