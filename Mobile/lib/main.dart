import 'package:areti_vitae_mobile/views/ajuda.dart';
import 'package:areti_vitae_mobile/views/cadastro.dart';
import 'package:areti_vitae_mobile/views/configuracoes.dart';
import 'package:areti_vitae_mobile/views/creditos.dart';
import 'package:areti_vitae_mobile/views/esqueciSenha.dart';
import 'package:areti_vitae_mobile/views/home.dart';
import 'package:areti_vitae_mobile/views/login.dart';
import 'package:areti_vitae_mobile/views/notas.dart';
import 'package:areti_vitae_mobile/views/notas_edicao.dart';
import 'package:areti_vitae_mobile/views/perfil.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Areti Vitae',
      theme: ThemeData(colorScheme: .fromSeed(seedColor: Colors.deepPurple)),
      home: Login(),

      routes: {
        "/home": (context) => Home(),
        "/login": (context) => Login(),
        "/perfil": (context) => Perfil(),
        "/cadastro": (context) => Cadastro(),
        "/ajuda": (context) => Ajuda(),
        "/configuracoes": (context) => Configuracoes(),
        "/esqueciSenha": (context) => EsqueciSenha(),
        "/notas": (context) => Notas(),
        "/creditos": (context) => Creditos(),
      },
    );
  }
}
