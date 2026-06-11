package com.av.Av.repository;
import com.av.Av.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository <User, Integer> {

    Optional<User> findByEmail(String email);//Optinal serve ao intuito de retornar um valor sobre o findbyemail, não é conveniente usar boolean, porque só retorna true ou false, ruim para casos de login, onde o email é o mesmo, e basta verficar a senha
    Optional<User> findByUsername(String username);
    Optional<User> findById(int id);
    List<User> findByAtivo(int ativo);
}
