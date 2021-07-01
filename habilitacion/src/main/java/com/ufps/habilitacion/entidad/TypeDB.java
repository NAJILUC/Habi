package com.ufps.habilitacion.entidad;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class TypeDB implements Serializable {
    @Id
    private String id;
    private String description;
    private String driver;
    private String aditional;
    @OneToMany(mappedBy = "type")
    private List<ConnectionToken> connectionToken;
}
