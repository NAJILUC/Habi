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
public class Reporte implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String file;
    @ManyToOne
    @JoinColumn(name = "conexion")
    private ConnectionToken conexion;
    @OneToMany(mappedBy = "reporte")
    private List<Seguimiento> seguimiento;
}
