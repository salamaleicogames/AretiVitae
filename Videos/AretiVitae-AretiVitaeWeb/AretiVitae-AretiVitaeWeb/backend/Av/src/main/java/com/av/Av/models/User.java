package com.av.Av.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.Objects;

@Entity
@Table(name = User.TABLE_NAME)
public class User {
    public static final String TABLE_NAME = "AretiVitae_Usuario";
    public interface CreateUser{}
    public interface UpdateUser{}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer id;

    @Column(name = "username", length = 16, nullable = false, unique = true)
    private String username;

    @Column(name = "idade")
    private int idade;

    @Column(name = "email")
    private String email;

    @Column(name = "senha", nullable = false)
    private String senha;

    @Column(name = "assinatura")
    private int assinatura;

    @Column(name = "ativo")
    private int ativo;

    /*--CONSTRUTORES--*/

    public User(){

    }

    public User(Integer id, String username, int idade, String email, String senha, int assinatura, int ativo) {
        this.id = id;
        this.username = username;
        this.idade = idade;
        this.email = email;
        this.senha = senha;
        this.assinatura = assinatura;
        this.ativo = ativo;
    }

    /*--Get & Set--*/

    public int getAtivo() {
        return ativo;
    }

    public void setAtivo(int ativo) {
        this.ativo = ativo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public int getAssinatura() {
        return assinatura;
    }

    public void setAssinatura(int assinatura) {
        this.assinatura = assinatura;
    }


    /*Equals e hashcode são métodos que verificam a existência de atributos
    iguais e atribuem um hash pra cada um deles
     */

    /*Gerado pelo INTELIJ*/
    @Override
    public boolean equals(Object obj) {
        if (obj == null || getClass() != obj.getClass()) return false;
        User user = (User) obj;
        return idade == user.idade && assinatura == user.assinatura && Objects.equals(id, user.id) && Objects.equals(username, user.username) && Objects.equals(email, user.email) && Objects.equals(senha, user.senha);
    }

    /*Feito na mão*/
    @Override
    public int hashCode() {
       final int prime = 31;
       int result = 1;
       result = prime * result + ((this.id == null) ? 0 : this.id.hashCode());
       return result;
    }
}
