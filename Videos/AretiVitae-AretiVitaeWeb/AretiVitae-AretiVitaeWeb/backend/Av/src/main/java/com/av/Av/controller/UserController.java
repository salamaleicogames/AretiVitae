package com.av.Av.controller;

import com.av.Av.Services.UserService;
import com.av.Av.models.User;
import com.av.Av.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping(value = "/apiAv")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    //Listagem Geral
    @GetMapping(value = "/ListAll")
    public List<User> listUser(){
        return userRepository.findAll();
    }

    //Listagem dos ativos
    @GetMapping(value = "/List")
    public List<User> listActiveUsers() {
        return userService.listActiveUsers();
    }

    //Registro
    @PostMapping(value = "/Register")
    public ResponseEntity<User> cadastro( @RequestBody User user) {
        User newUser = userService.cadastro(user);//Instância o novo usuário no backend

        return ResponseEntity.status(201).body(newUser);//Cadastra o usuário
    }

    //Atualizador com base no id
    @PutMapping(value = "/Update/{id}")
    public ResponseEntity<User> update(@RequestBody User updateduser, @PathVariable int id){
        User user = userService.update(id, updateduser);// Chama a função de service com os valores
        return ResponseEntity.status(201).body(updateduser);//Retorna a resposta com base no sucesso da função
    }

    //Login com email e senha (USA POST PARA QUE OS DADOS NÃO FIQUEM NA URL, E TAMBÉM PERMITE O BODY DO JSON)
    @PostMapping(value = "/Login")
    public ResponseEntity<User> login(@RequestBody User loginUser){
        User user = userService.login(loginUser.getEmail(), loginUser.getSenha());
        return ResponseEntity.ok(user);//Ok é o 201, porém reduzido
    }

    //Procura por id
    @GetMapping("/{id}")
    public User findById(@PathVariable int id) {
        return userService.findById(id);
    }

    //Procura por username
    @GetMapping("/username/{username}")
    public User findByUsername(@PathVariable String username){
        return userService.findByUsername(username);
    }

    //Procura por email
    @GetMapping("/email/{email}")
    public User findByEmail(@PathVariable String email){
        return userService.findByEmail(email);
    }



    /*Cookies Session

    String tokenID = UUID.randomUUID().toString(); // Gerador de id do token

    @GetMapping("/loginInfo")
    public String login(HttpServletResponse response){
        Cookie cookie = new Cookie("token", tokenID);
        cookie.setMaxAge(3600); //3600 segundos de duração, expira em 1 hora
        cookie.setHttpOnly(true); //JavaScript não consegue acessar (não da pra ver pelo console)
        cookie.setSecure(true); //Só via protocolo HTTPS para acessar essas informações
        cookie.setPath("/"); // Válido para qualquer path
        response.addCookie(cookie);
        return "logged";
    }

    @GetMapping("/perfil")
    public String perfil(
        @CookieValue(value = "token", defaultValue = "") String token
    ) {
        if(token.isEmpty()) return "Não autenticado";
        return "token: " + token;
    }

    @GetMapping("/cookies")
    public String allCokies(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if(cookies == null) return "Nenhum cookie encontrado";

        for(Cookie c : cookies){
            System.out.println(c.getName() + " = " + c.getValue());
        }

        return "OK";
    }

    //Cookie DELETE
    @GetMapping("/logout")
    public String logout (HttpServletResponse response){
        Cookie cookie = new Cookie("token" , "");
        cookie.setMaxAge(0); // Deleta o cookie
        cookie.setPath("/");
        response.addCookie(cookie);
        return "logout";
    }


    */


}
