package com.sha.serverusermanagement.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
/*@Entity
@Table(name="School")*/
public class School implements Serializable {

   /* @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)*/
    private String schoolname;

    //@Column(name = "name")
    private String schoolid;

    //@Column(name="username")
    private String address;

    //@Column(name="password")
    private String country;

    //@Enumerated(EnumType.STRING)
   //@Column(name="role")
    private String mobilenumber;
    
    private String email;
}
