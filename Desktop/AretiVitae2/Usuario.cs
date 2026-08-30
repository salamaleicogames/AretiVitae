using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using BCrypt.Net;
using System.Windows.Forms;

namespace AretiVitae2
{
    // <summary>
    /// Usuario
    /// - Representa os usuários no sistema (ADMs e Usuários comuns)
    /// - Realiza operações de CRUD
    /// </summary>

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

        #region Métodos Get/Set

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
        /// ValidaCpf - Valida o CPF informado pelo Usuário proveniente do formulário de Cadastro/Consulta
        /// </summary>
        /// <param name="cpf">CPF informado pelo Usuário</param>
        /// <returns> true --> CPF válido</returns>
        /// <returns> false --> CPF inválido</returns>
        private bool ValidaCpf(string cpf)
        {
            // Retira os espaços e caracteres adicionais
            cpf = cpf.Replace(".", "").Replace("-", "").Trim();

            // Verifica o número de dígitos (11 dígitos)
            if (cpf.Length != 11)
            {
                return false;
            }

            // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
            if (new string(cpf[0], 11) == cpf)
            {
                return false;
            }

            // Vetores com multiplicadores de validação
            int[] mult1 = { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
            int[] mult2 = { 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 };

            // Cálculo do primeiro dígito verificador
            string tempCpf = cpf.Substring(0, 9);
            int soma = 0;

            for (int i = 0; i < 9; i++)
            {
                soma += int.Parse(tempCpf[i].ToString()) * mult1[i];
            }

            int resto = soma % 11;
            resto = resto < 2 ? 0 : 11 - resto;

            string digito = resto.ToString();
            tempCpf += digito;

            // Cálculo do segundo dígito verificador
            soma = 0;

            for (int i = 0; i < 10; i++)
            {
                soma += int.Parse(tempCpf[i].ToString()) * mult2[i];
            }

            resto = soma % 11;
            resto = resto < 2 ? 0 : 11 - resto;

            digito += resto.ToString();

            // Compara o final do CPF com os dígitos calculados
            return cpf.EndsWith(digito);
        }



        /// <summary>
        /// ValidaEmail - Valida o email no momento do cadastro/atualização
        /// </summary>
        /// <param name="email">Emeil informado pelo Usuário, proveniente do formulário de Cadastro/Consulta</param>
        /// <returns> true --> Email válido</returns>
        /// <returns> false --> Email inválido</returns>
        private bool ValidaEmail(string email)
        {
            try
            {
                MailAddress endereco = new MailAddress(email);
                return endereco.Address == email;
            }
            catch
            {
                return false;
            }
        }


        /// <summary>
        /// CadastrarUsuario - Cadastra um Usuário no sistema
        /// </summary>
        /// <param name="username">Nome do Usuário</param>
        /// <param name="idade">Idade</param>
        /// <param name="email">Email</param>
        /// <param name="senha">Senha</param>
        /// <param name="tipoRegistro">Tipo de Registro</param>
        /// <param name="registro">Registro</param>
        /// <returns>True se cadastrar com sucesso</returns>
        public bool CadastrarUsuario(string username, int idade, string email, string senha, string tipoRegistro, string registro)
        {
            bool cad = false;

            //Gera o HASH da senha do Usuário
            string senhaHash = BCrypt.Net.BCrypt.HashPassword(senha);

            //Validação do CPF
            if (tipoRegistro == "Pessoa Física" && !ValidaCpf(registro))
            {
                MessageBox.Show("CPF Inválido!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return false;
            }

            //Validação do Email
            if (!ValidaEmail(email))
            {
                MessageBox.Show("Email Inválido!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return false;
            }

            try
            {
                DAO_Conexao.con.Open();

                //Cadastra o usuário no B.D
                MySqlCommand inserir = new MySqlCommand("INSERT INTO AretiVitae_Usuario (username, idade, email, senha, tipoRegistro, registro, ativo) VALUES (@username, @idade, @email, @senha, @tipoRegistro, @registro, 0);", DAO_Conexao.con);
                inserir.Parameters.AddWithValue("@username", username);
                inserir.Parameters.AddWithValue("@idade", idade);
                inserir.Parameters.AddWithValue("@email", email);
                inserir.Parameters.AddWithValue("@senha", senhaHash);
                inserir.Parameters.AddWithValue("@tipoRegistro", tipoRegistro);
                inserir.Parameters.AddWithValue("@registro", registro);
                
                int linhasAfetadas = inserir.ExecuteNonQuery();

                if (linhasAfetadas > 0)
                {
                    cad = true;

                    long idUsuario = inserir.LastInsertedId;

                    if (assinatura > 0)
                    {
                        //Guarda a data do cadastro
                        DateTime dataCompra = DateTime.Today;

                        //Calcula a data de vencimento
                        DateTime dataVencimento = dataCompra.AddMonths(1);

                        //Cadastra o usuário com o plano Free na tabela de Compras
                        MySqlCommand inserirCompra = new MySqlCommand("INSERT INTO AretiVitae_Compra (id_usuario, 0, dataCompra, ativo, criado_em, valor_pago) VALUES (@idUsuario, @idPlano, @dataCompra, @dataVencimento, @ativo, @criadoEm, @valorPago);", DAO_Conexao.con);

                        inserirCompra.Parameters.AddWithValue("@idUsuario", idUsuario);
                        inserirCompra.Parameters.AddWithValue("@dataCompra", dataCompra);
                        inserirCompra.Parameters.AddWithValue("@ativo", 0);
                        inserirCompra.Parameters.AddWithValue("@criadoEm", DateTime.Now);
                        inserirCompra.Parameters.AddWithValue("@valorPago", 0.00);

                        inserirCompra.ExecuteNonQuery();
                    }
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
        /// ConsultarUsuario - Consulta um Usuário no sistema
        /// </summary>
        /// <param name="username">Nome de Usuário</param>
        /// <returns>Retorna um vetor com os dados do usuário consultado</returns>
        public MySqlDataReader ConsultarUsuario(string username)
        {
            MySqlDataReader resultado = null;
            try
            {
                DAO_Conexao.con.Open();
                
                //Busca o usuário no B.D, por meio do "username".
                MySqlCommand consultar = new MySqlCommand(
                    "SELECT * FROM AretiVitae_Usuario WHERE username = @username", DAO_Conexao.con);
                consultar.Parameters.AddWithValue("@username", username);

                resultado = consultar.ExecuteReader();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro ao consultar usuário: " + ex.Message, "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            return resultado;
        }


        /// <summary>
        /// AtualizarUsuario - Atualiza os dados do usuário
        /// </summary>
        /// <param name="username">Nome do Usuário</param>
        /// <param name="idade">Idade</param>
        /// <param name="email">Email</param>
        /// <param name="senha">Senha</param>
        /// <param name="tipoRegistro">Tipo de Registro (CPF ou CNPJ)</param>
        /// <param name="registro">Registro</param>
        /// <param name="ativo">Código de Ativação do usuário</param>
        /// <returns>True se a atualização for bem sucedida</returns>
        public bool AtualizarUsuario(string username, int idade, string email, string senha, string tipoRegistro, string registro, int ativo)
        {
            bool resultado = false;

            // Validação do CPF
            if (tipoRegistro == "Pessoa Física" && !ValidaCpf(registro))
            {
                MessageBox.Show("CPF Inválido!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return false;
            }

            // Validação do Email
            if (!ValidaEmail(email))
            {
                MessageBox.Show("Email Inválido!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return false;
            }

            try
            {
                DAO_Conexao.con.Open();

                // Atualiza os dados do usuário no B.D
                string sqlUpdate = "UPDATE AretiVitae_Usuario SET idade = @idade, email = @email, senha = @senha, tipoRegistro = @tipoRegistro, registro = @registro WHERE username = @username";

                MySqlCommand atualizar = new MySqlCommand(sqlUpdate, DAO_Conexao.con);

                atualizar.Parameters.AddWithValue("@idade", idade);
                atualizar.Parameters.AddWithValue("@email", email);

                string senhaHash = BCrypt.Net.BCrypt.HashPassword(senha);

                atualizar.Parameters.AddWithValue("@senha", senhaHash);

                atualizar.Parameters.AddWithValue("@tipoRegistro", tipoRegistro);
                atualizar.Parameters.AddWithValue("@registro", registro);
                atualizar.Parameters.AddWithValue("@username", username);

                int linhasAfetadas = atualizar.ExecuteNonQuery();

                if (linhasAfetadas > 0)
                {
                    resultado = true;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(
                    "Erro ao atualizar usuário: " + ex.Message,
                    "Atenção",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Error);

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
        /// AtualizarUsuarioS - sobrecarga do método anterior, para não depender da senha para a atualização dos dados
        /// </summary>
        /// <param name="username">Nome do Usuário</param>
        /// <param name="idade">Idade</param>
        /// <param name="email">Email</param>
        /// <param name="tipoRegistro">Tipo de Registro</param>
        /// <param name="registro">Registro</param>
        /// <param name="ativo">Código de Ativação do usuário</param>
        /// <returns>True se a atualização for bem sucedida</returns>
        public bool AtualizarUsuarioS(string username, int idade, string email, string tipoRegistro, string registro, int ativo)
        {
            bool resultado = false;

            // Validação do CPF
            if (tipoRegistro == "Pessoa Física" && !ValidaCpf(registro))
            {
                MessageBox.Show("CPF Inválido!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return false;
            }

            // Validação do Email
            if (!ValidaEmail(email))
            {
                MessageBox.Show("Email Inválido!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return false;
            }

            try
            {
                DAO_Conexao.con.Open();

                // Atualiza os dados do usuário
                string sqlUpdate = "UPDATE AretiVitae_Usuario SET idade = @idade, email = @email, tipoRegistro = @tipoRegistro, registro = @registro, ativo = @ativo WHERE username = @username";

                MySqlCommand atualizar = new MySqlCommand(sqlUpdate, DAO_Conexao.con);

                atualizar.Parameters.AddWithValue("@idade", idade);
                atualizar.Parameters.AddWithValue("@email", email);
                atualizar.Parameters.AddWithValue("@tipoRegistro", tipoRegistro);
                atualizar.Parameters.AddWithValue("@registro", registro);
                atualizar.Parameters.AddWithValue("@ativo", ativo);
                atualizar.Parameters.AddWithValue("@username", username);

                int linhasAfetadas = atualizar.ExecuteNonQuery();

                if (linhasAfetadas > 0)
                {
                    resultado = true;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(
                    "Erro ao atualizar usuário: " + ex.Message,
                    "Atenção",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Error);

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
        /// BuscarRegistroUsuario - Busca o tipo de Registro e Registro do usuário
        /// </summary>
        /// <param name="username"></param>
        /// <param name="tipo"></param>
        /// <param name="registro"></param>
        public void BuscarRegistroUsuario(string username, out string tipo, out string registro)
        {
            tipo = "";
            registro = "";
            try
            {
                DAO_Conexao.con.Open();

                //Busca o tipo de Registro e Registro no B.D
                string sql = "SELECT tipoRegistro, registro FROM AretiVitae_Usuario WHERE username = '" + username + "';";
                MySqlCommand cmd = new MySqlCommand(sql, DAO_Conexao.con);
                MySqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    tipo = dr["tipoRegistro"].ToString();
                    registro = dr["registro"].ToString();
                }
                dr.Close();
            }
            catch { }
            finally { DAO_Conexao.con.Close(); }
        }

        /// <summary>
        /// DesativacaoUsuario - Desativação um usuário na plataforma
        /// </summary>
        /// <param name="username">Nome de Usuário</param>
        /// <param name="email">Email</param>
        /// <returns> true se a desativação for bem sucedida, e false se houver algum erro</returns>
        public bool DesativacaoUsuario(string username, string email)
        {
            bool resultado = false;
            int assinatura = 0;

            try
            {
                DAO_Conexao.con.Open();

                // Desativa o usuário no B.D, alterando o atributo ativo.
                string query = "UPDATE AretiVitae_Usuario SET ativo = 1 WHERE username = @username AND email = @email";

                MySqlCommand atualizar = new MySqlCommand(query, DAO_Conexao.con);
                atualizar.Parameters.AddWithValue("@username", username);
                atualizar.Parameters.AddWithValue("@email", email);


                int linhasAfetadas = atualizar.ExecuteNonQuery();

                //Verifica se o usuário existe no sistema
                if (linhasAfetadas == 0)
                {
                    MessageBox.Show("Usuário não encontrado ou dados inválidos.", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return false;
                }

                resultado = true;

                // Obtém o ID do usuário
                string queryId = "SELECT id FROM AretiVitae_Usuario WHERE username = @username";

                MySqlCommand cmdId = new MySqlCommand(queryId, DAO_Conexao.con);
                cmdId.Parameters.AddWithValue("@username", username);

                object result = cmdId.ExecuteScalar();

                if (result != null)
                {
                    int idUsuario = Convert.ToInt32(result);

                    //Desativa a compra associada ao usuário
                    string queryAssinatura = @"SELECT plano FROM AretiVitae_Compra WHERE id_usuario = @id_usuario";
                    MySqlCommand cmdAssinatura = new MySqlCommand(queryAssinatura, DAO_Conexao.con);
                    cmdAssinatura.Parameters.AddWithValue("@id_usuario", idUsuario);

                    object resultPlano = cmdAssinatura.ExecuteScalar();

                    if (resultPlano != null && resultPlano != DBNull.Value)
                    {
                        assinatura = Convert.ToInt32(resultPlano);
                    }

                    if (assinatura != 0)
                    {
                        string queryDesativarCompra = @"UPDATE AretiVitae_Compra SET ativo = 1 WHERE id_usuario = @id_usuario AND plano = @plano";

                        MySqlCommand cmdDesativarCompra = new MySqlCommand(queryDesativarCompra, DAO_Conexao.con);
                        cmdDesativarCompra.Parameters.AddWithValue("@id_usuario", idUsuario);
                        cmdDesativarCompra.Parameters.AddWithValue("@plano", assinatura);

                        cmdDesativarCompra.ExecuteNonQuery();
                    }
                }
                else
                {
                    MessageBox.Show(
                        "Não foi possível localizar o ID do usuário.",
                        "Atenção",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.Warning);

                    resultado = false;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(
                    "Erro ao excluir usuário: " + ex.Message,
                    "Erro",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Error);

                resultado = false;
            }
            finally
            {
                if (DAO_Conexao.con.State == System.Data.ConnectionState.Open)
                {
                    DAO_Conexao.con.Close();
                }
            }

            return resultado;
        }

        /// <summary>
        /// ConsultarUsuarioADM - Retorna todos os administradores cadastrados
        /// </summary>
        public MySqlDataReader ConsultarUsuarioADM()
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
        /// AtualizarUsuarioADM - Atualiza a senha de um administrador (função exclusiva para Builder)
        /// </summary>
        /// <param name="usuario">Nome do Usuário</param>
        /// <param name="senha">Senha</param>
        /// <returns>True se a atualização for bem sucedida</returns>
        public bool AtualizarUsuarioADM(string usuario, string senha)
        {
            //Gera o hash da nova senha
            string senhaHash = BCrypt.Net.BCrypt.HashPassword(senha);

            bool resultado = false;
            try
            {
                DAO_Conexao.con.Open();

                //Atualiza a senha no B.D
                MySqlCommand atualizar = new MySqlCommand("UPDATE AretiVitae_Admin SET senha = @senha WHERE usuario = @usuario", DAO_Conexao.con);
                atualizar.Parameters.AddWithValue("@senha", senhaHash); 
                atualizar.Parameters.AddWithValue("@usuario", usuario); 
                
              
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
    }
}