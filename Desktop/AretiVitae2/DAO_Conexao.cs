using System;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BCrypt.Net;

namespace AretiVitae2
{
    /// <summary>
    /// DAO_Conexao:
    /// - Gerencia a conexão com o banco de dados MySQL
    /// - Realiza operações de autenticação e login no sistema
    /// </summary>

 

    internal class DAO_Conexao
    {
        /// <summary>
        /// Objeto de conexão com o banco de dados.
        /// É estático para ser compartilhado por toda a aplicação.
        /// </summary>
        public static MySqlConnection con;

        /// <summary>
        /// GetConexao - Configura a conexão com o banco de dados.
        /// </summary>
        /// <param name="local">Endereço do servidor (ex: localhost)</param>
        /// <param name="banco">Nome do banco de dados</param>
        /// <param name="user">Usuário do banco</param>
        /// <param name="senha">Senha do banco</param>
        /// <returns>
        /// Retorna true se a string de conexão for criada com sucesso, caso contrário retorna false
        /// </returns>
        public static Boolean GetConexao(String local, String banco, String user, String senha)
        {
            Boolean conexao = false;
            try
            {
                con = new MySqlConnection("Server=" + local + ";" + "User ID=" + user + ";" + "Database=" + banco + ";" + "Password=" + senha + ";");
                conexao = true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return conexao;
        }


        /// <summary>
        /// ValidaLogin - Valida o login do usuário administrador
        /// </summary>
        /// <param name="usuario">Nome de usuário</param>
        /// <param name="senha">Senha</param>
        /// <returns>
        /// Retorna um número inteiro representando o tipo de acesso:
        /// 0 = Login inválido
        /// 1 = Administrador tipo ADM
        /// 2 = Administrador tipo BUILDER
        /// </returns>
        public static int ValidaLogin(string usuario, string senha)
        {
            int log = 0;

            try
            {
                //Cria e verifica a conexão com o B.D.
                if (con == null)
                {
                    bool ok = GetConexao("143.106.241.4", "cl204177", "cl204177", "cl*04062009");

                    if (!ok || con == null)
                    {
                        Console.WriteLine("Erro ao criar conexão");
                        return 0;
                    }
                }


                if (con.State != System.Data.ConnectionState.Open)
                {
                    con.Open();
                }


                // Busca o HASH da senha cadastrada e o tipo cadastrados para o usuário.
                string query = "SELECT senha, tipo FROM AretiVitae_Admin WHERE usuario = @usuario";

                MySqlCommand login = new MySqlCommand(query, con);
                login.Parameters.AddWithValue("@usuario", usuario);

                MySqlDataReader resultado = login.ExecuteReader();

                if (resultado.Read())
                {
                    string senhaHashBanco = resultado["senha"].ToString();

                    // Compara a senha digitada em texto com o hash gravado no B.D.
                    if (BCrypt.Net.BCrypt.Verify(senha, senhaHashBanco))
                    {
                        log = Convert.ToInt32(resultado["tipo"]);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro ao validar login: " + ex.Message);
            }
            finally
            {
                //Após o login, fecha a conexao com o Banco de Dados.
                try
                {
                    if (con != null && con.State != System.Data.ConnectionState.Closed)
                    {
                        con.Close();
                    }
                }
                catch { }

            }

            return log;
        }

    }
}