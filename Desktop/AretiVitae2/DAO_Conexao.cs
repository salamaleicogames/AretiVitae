using System;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AretiVitae2
{
    /// <summary>
    /// Classe responsável por gerenciar a conexão com o banco de dados MySQL
    /// e realizar operações básicas de autenticação de login.
    /// </summary>

    ///<author>João Mantz de OLiveira e Maurício Fernandes Ferreira</author>


    internal class DAO_Conexao
    {
        /// <summary>
        /// Objeto de conexão com o banco de dados.
        /// É estático para ser compartilhado por toda a aplicação.
        /// </summary>
        public static MySqlConnection con;

        /// <summary>
        /// Método responsável por configurar a conexão com o banco de dados.
        /// </summary>
        /// <param name="local">Endereço do servidor (ex: localhost)</param>
        /// <param name="banco">Nome do banco de dados</param>
        /// <param name="user">Usuário do banco</param>
        /// <param name="senha">Senha do banco</param>
        /// <returns>
        /// Retorna true se a string de conexão for criada com sucesso,
        /// caso contrário retorna false.
        /// </returns>
        public static Boolean getConexao(String local, String banco, String user, String senha)
        {
            Boolean retorno = false;
            try
            {
                con = new MySqlConnection(
                    "Server=" + local + ";" +
                    "User ID=" + user + ";" +
                    "Database=" + banco + ";" +
                    "Password=" + senha + ";");                
                //con.Open();
                retorno = true;
            }
            //Exibe erro no console
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return retorno;
        }


        /// <summary>
        /// Método responsável por validar o login do usuário administrador.
        /// </summary>
        /// <param name="usuario">Nome de usuário informado no login</param>
        /// <param name="senha">Senha informada no login</param>
        /// <returns>
        /// Retorna um número inteiro representando o tipo de acesso:
        /// 0 = Login inválido
        /// 1 = Administrador comum
        /// 2 = Administrador Master
        /// </returns>
        public static int validaLogin(string usuario, string senha)
        {
            int log = 0;

            try
            {
                if (con == null)
                {
                    bool ok = getConexao("143.106.241.4", "cl204177", "cl204177", "cl*04062009");

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

                MySqlCommand login = new MySqlCommand(
                        "SELECT tipo FROM AretiVitae_Admin WHERE usuario = '" + usuario + "' AND senha = '" + senha + "';",
                        con);

                    MySqlDataReader resultado = login.ExecuteReader();

                    if (resultado.Read())
                    {
                        log = Convert.ToInt32(resultado["tipo"]);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Erro ao validar login: " + ex.Message);
                }
                finally
                {
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
