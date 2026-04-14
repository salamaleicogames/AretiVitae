using MySql.Data.MySqlClient;
using System;
using System.Windows.Forms;

namespace Tela_Admin
{
    /// <summary>
    /// Classe responsável por representar um Usuário no sistema.
    /// Também é responsável por representar os Administradores dessa aplicação
    /// Contém dados pessoais, informações de assinatura e métodos de acesso ao banco.
    /// </summary>

    /// <remarks>
    /// Esta classe também realiza operações CRUD diretamente no MySQL.
    /// </remarks>
    
    ///<author>João Mantz de Oliveira e Maurício Fernandes Ferreira</author>
    internal class Usuario
    {
        #region Atributos

        /// <summary>Nome de usuário</summary>
        string username;

        /// <summary>Idade do usuário</summary>
        int idade;

        /// <summary>Email do usuário</summary>
        string email;

        /// <summary>Senha do usuário</summary>
        string senha;

        /// <summary>Código da árvore</summary>
        string cod_tree;

        /// <summary>Status da assinatura</summary>
        int assinatura;

        /// <summary>Status de atividade (0 ativo / 1 inativo)</summary>
        int ativo;

        #endregion


        #region Propriedades

        /// <summary>Obtém ou define o nome do usuário</summary>
        public string Username { get => username; set => username = value; }

        /// <summary>Obtém ou define a idade do usuário</summary>
        public int Idade { get => idade; set => idade = value; }

        /// <summary>Obtém ou define o email do usuário</summary>
        public string Email { get => email; set => email = value; }

        /// <summary>Obtém ou define a senha do usuário</summary>
        public string Senha { get => senha; set => senha = value; }

        /// <summary>Obtém ou define o código da árvore</summary>
        public string Cod_tree { get => cod_tree; set => cod_tree = value; }

        /// <summary>Obtém ou define o status da assinatura</summary>
        public int Assinatura { get => assinatura; set => assinatura = value; }

        /// <summary>Obtém ou define o status de atividade</summary>
        public int Ativo { get => ativo; set => ativo = value; }

        #endregion

        #region Construtores

        /// <summary>
        /// Construtor padrão
        /// </summary>
        public Usuario() { }

        /// <summary>
        /// Construtor completo do usuário
        /// </summary>
        /// <param name="username">Nome do usuário</param>
        /// <param name="idade">Idade</param>
        /// <param name="email">Email</param>
        /// <param name="senha">Senha</param>
        /// <param name="Cod_tree">Código da árvore (Tree)</param>
        /// <param name="assinatura">Tipo de assinatura</param>
        public Usuario(string username, int idade, string email, string senha, string Cod_tree, int assinatura)
        {
            this.username = username;
            this.idade = idade;
            this.email = email;
            this.senha = senha;
            this.Cod_tree = Cod_tree;
            this.Assinatura = assinatura;
            this.Ativo = 0;
        }

        #endregion


        /// <summary>
        /// Método responsável por cadastrar um Usuário no Banco de Dados
        /// </summary>
        /// <param name="username">Nome do Usuário</param>
        /// <param name="idade">Idade</param>
        /// <param name="email">Email</param>
        /// <param name="senha">Senha</param>
        /// <param name="Cod_tree">Código da Árvore (Tree)</param>
        /// <param name="assinatura">Tipo de Assinatura</param>
        /// <param name="tipoRegistro">Tipo de Registro</param>
        /// <param name="registro">Registro</param>
        /// <returns>True se cadastrar com sucesso</returns>
        public bool cadastrarUsuario(string username, int idade, string email, string senha, string Cod_tree, int assinatura, string tipoRegistro, string registro)
        {
            bool cad = false;
            try
            {
                DAO_Conexao.con.Open();

                MySqlCommand inserir = new MySqlCommand(
                    "INSERT INTO AretiVitae_Usuario (username, idade, email, senha, cod_tree, assinatura, tipoRegistro, registro, ativo) VALUES ('" + username + "', " + idade + ", '" + email + "', '" + senha + "', '" + Cod_tree + "', " + assinatura + ",'" + tipoRegistro + "','" + registro + "', 0);", DAO_Conexao.con);

                int linhasAfetadas = inserir.ExecuteNonQuery();
                if (linhasAfetadas > 0)
                {
                    cad = true;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro ao cadastrar: " + ex.Message, "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally
            {
                if (DAO_Conexao.con.State == System.Data.ConnectionState.Open)
                    DAO_Conexao.con.Close();
            }

            return cad;
        }


        /// <summary>
        /// Método responsável por Consultar um Usuário no Banco de Dados
        /// </summary>
        /// <param name="username">Nome de Usuário</param>
        /// <returns>Retorna um vetor com os dados do usuário consultado</returns>
        public MySqlDataReader consultarUsuario(string username)
        {
            MySqlDataReader resultado = null;
            try
            {
                DAO_Conexao.con.Open();
                MySqlCommand consultar = new MySqlCommand(
                    "SELECT * FROM AretiVitae_Usuario WHERE username = '" + username + "';",
                    DAO_Conexao.con
                );
                resultado = consultar.ExecuteReader();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro ao consultar usuário: " + ex.Message, "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            return resultado;
        }

        /// <summary>
        /// Método responsável por atualizar os dados de um usuário
        /// </summary>
        /// <param name="username">Nome do Usuário</param>
        /// <param name="idade">Idade</param>
        /// <param name="email">Email</param>
        /// <param name="senha">Senha</param>
        /// <param name="Cod_tree">Código da Árvore (Tree)</param>
        /// <param name="assinatura">Tipo da assinatura</param>
        /// <param name="tipoRegistro">Tipo de Registro</param>
        /// <param name="registro">Registro</param>
        /// <param name="ativo">Código de Ativação do usuário</param>
        /// <returns>True se a atualização for bem sucedida</returns>
        public bool atualizarUsuario(string username, int idade, string email, string senha, string Cod_tree, int assinatura, string tipoRegistro, string registro, int ativo)
        {
            bool resultado = false;
            try
            {
                DAO_Conexao.con.Open();

                MySqlCommand atualizar = new MySqlCommand("UPDATE AretiVitae_Usuario SET idade = " + idade + ", email = '" + email + "', senha = '" + senha + "', cod_tree = '" + Cod_tree + "', assinatura = " + assinatura + ", tipoRegistro = '" + tipoRegistro + "', registro = '" + registro + "', ativo = " + ativo + " WHERE username = '" + username + "';", DAO_Conexao.con);
                int linhasAfetadas = atualizar.ExecuteNonQuery();

                if (linhasAfetadas > 0)
                {
                    resultado = true;
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro ao atualizar usuário: " + ex.Message, "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Error);
                resultado = false;
            }
            finally
            {
                if (DAO_Conexao.con.State == System.Data.ConnectionState.Open)
                    DAO_Conexao.con.Close();
            }

            return resultado;
        }

        /// <summary>
        /// Método reponsável pela desativação de um usuário
        /// </summary>
        /// <param name="username">Nome de Usuário</param>
        /// <param name="email">Email</param>
        /// <param name="senha">Senha</param>
        /// <returns>True se a exclusão for bem sucedida</returns>
        public bool excluirUsuario(string username, string email, string senha)
        {
            bool resultado = false;
            try
            {
                DAO_Conexao.con.Open();

                string query = "UPDATE AretiVitae_Usuario SET ativo = 1 WHERE username = '" + username + "' AND email = '" + email + "' AND senha = '" + senha + "';";
                MySqlCommand atualizar = new MySqlCommand(query, DAO_Conexao.con);
                atualizar.ExecuteNonQuery();
                resultado = true;


                // Caso o usuário tiver assinatura Network, desativa a assinatura também
                MySqlCommand cmdId = new MySqlCommand("SELECT id FROM AretiVitae_Usuario WHERE username = '" + username + "';", DAO_Conexao.con);
                int idUsuario = int.Parse(cmdId.ExecuteScalar().ToString());

                string queryAssinatura = "UPDATE AretiVitae_Assinatura SET ativo = 1 WHERE id_usuario = " + idUsuario + ";";
                MySqlCommand atualizarAssinatura = new MySqlCommand(queryAssinatura, DAO_Conexao.con);
                atualizarAssinatura.ExecuteNonQuery();

            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro ao excluir usuário: " + ex.Message);
                resultado = false;
            }
            finally
            {
                if (DAO_Conexao.con.State == System.Data.ConnectionState.Open)
                    DAO_Conexao.con.Close();
            }

            return resultado;
        }

        /// <summary>
        /// Retorna todos os administradores cadastrados
        /// </summary>
        public MySqlDataReader consultarUsuarioADM()
        {
            MySqlDataReader resultado = null;
            try
            {
                DAO_Conexao.con.Open();
                MySqlCommand consultar = new MySqlCommand("SELECT * FROM AretiVitae_Admin;", DAO_Conexao.con);
                resultado = consultar.ExecuteReader();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return resultado;
        }


        /// <summary>
        /// Atualiza a senha de um administrador 
        /// </summary>
        /// <param name="usuario">Nome do Usuário</param>
        /// <param name="senha">Senha</param>
        /// <returns>True se a atualização for bem sucedida</returns>
        public bool atualizarUsuarioADM(string usuario, string senha)
        {
            bool resultado = false;
            try
            {
                DAO_Conexao.con.Open();
                MySqlCommand atualizar = new MySqlCommand("UPDATE AretiVitae_Admin SET senha = '" + senha + "' WHERE usuario = '" + usuario + "';", DAO_Conexao.con);
                int linhas = atualizar.ExecuteNonQuery();
                resultado = linhas > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                resultado = false;
            }
            finally
            {
                DAO_Conexao.con.Close();
            }
            return resultado;
        }


        /// <summary>
        /// Consulta a senha do Administrador
        /// </summary>
        /// <param name="usuario">Nome do Usuário</param>
        /// <returns>Retorna a senha do Administrador</returns>
        public string consultarSenhaADM(string usuario)
        {
            string senha = "";
            try
            {
                DAO_Conexao.con.Open();
                MySqlCommand consultar = new MySqlCommand(
                    "SELECT senha FROM AretiVitae_Admin WHERE usuario = '" + usuario + "';",
                    DAO_Conexao.con
                );
                MySqlDataReader r = consultar.ExecuteReader();
                if (r.Read())
                {
                    senha = r["senha"].ToString();
                }
                r.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro: " + ex.Message);
            }
            finally
            {
                DAO_Conexao.con.Close();
            }
            return senha;
        }

    }
}
