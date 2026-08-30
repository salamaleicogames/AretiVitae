using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AretiVitae2
{

    /// <summary>
    /// Formulário responsável pelo login de Administradores no sistema.
    /// Realiza validação de credenciais e direciona o usuário conforme seu nível de acesso. (ADM ou Builder)
    /// </summary>
    public partial class fLogin : Form
    {
        public fLogin()
        {
            InitializeComponent();

            #region Teste de conexão com B.D
            //Teste de conexão com Banco de Dados
            if (DAO_Conexao.GetConexao("143.106.241.4", "cl204177", "cl204177", "cl*04062009"))
                Console.WriteLine("Conectado");
            else
                Console.WriteLine("Erro de conexão");
            #endregion

            #region Estilização de elementos visuais
            btnEntrar.FlatStyle = FlatStyle.Flat;
            btnEntrar.FlatAppearance.BorderColor = System.Drawing.Color.Gray;

            BackColor = System.Drawing.Color.FromArgb(75,94,153);
            lblDescicao.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
            pictureBox2.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
            imgLogo.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);

            #endregion

            //Define foco inicial no campo usuário
            txtUsuario.Focus();
        }



        /// <summary>
        /// Evento do clique no botão Entrar.
        /// Realiza o login do administrador no sistema
        /// </summary>
        private void BtnEntrar_Click(object sender, EventArgs e)
        {
            //Verificação de campos vazios
            if (string.IsNullOrEmpty(txtUsuario.Text) || string.IsNullOrEmpty(mtxtSenha.Text))
            {
                MessageBox.Show("Preencha todos os campos corretamente!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return;
            }


            // Validação de Usuário e Senha - (retorna tipo de acesso)
            int tipo = DAO_Conexao.ValidaLogin(txtUsuario.Text, mtxtSenha.Text);


            if (tipo == 0) //Login inválido
            {
                MessageBox.Show("Usuário/Senha inválidos!");
            }
            else if (tipo == 1) //Administrador tipo ADM
            {

                MessageBox.Show("Usuário ADM", "Bem-vindo", MessageBoxButtons.OK, MessageBoxIcon.Information);

                string nomeUsuario = txtUsuario.Text;

                //Abre o formulário inicial e fecha o login
                fIndex index = new fIndex(tipo, nomeUsuario);
                index.Show();
                this.Hide();

                DAO_Conexao.con.Close();
            }
            else if (tipo == 2) //Administrador tipo BUILDER
            {
                MessageBox.Show("Usuário Builder", "Bem-vindo", MessageBoxButtons.OK, MessageBoxIcon.Information);

                string nomeUsuario = txtUsuario.Text;
                //Abre o formulário inicial e fecha o login
                fIndex index = new fIndex(tipo, nomeUsuario);
                index.Show();
                this.Hide();

                DAO_Conexao.con.Close();
            }
        }


        /// <summary>
        /// Evento KeyPress no campo de Senha
        /// Permite realizar o login ao pressionar a tecla ENTER
        /// </summary>
        /// <param name="sender">Objeto que disparou o parâmetro</param>
        /// <param name="e">Dados da tecla pressionada</param>
        private void mtxtSenha_KeyPress(object sender, KeyPressEventArgs e)
        {
            //Tecla ENTER
            if (e.KeyChar == 13)
            {
                //Verificação de campos vazios//
                if (string.IsNullOrEmpty(txtUsuario.Text) || string.IsNullOrEmpty(mtxtSenha.Text))
                {
                    MessageBox.Show("Preencha todos os campos corretamente!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return;
                }


                // Validação de Usuário e Senha
                int tipo = DAO_Conexao.ValidaLogin(txtUsuario.Text, mtxtSenha.Text);

                if (tipo == 0)
                {
                    MessageBox.Show("Usuário/Senha inválidos!");

                    DAO_Conexao.con.Close();
                }
                else if (tipo == 1)
                {
                    string nomeUsuario = txtUsuario.Text;
  
                    MessageBox.Show("Usuário ADM", "Bem-vindo", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    //Abre o formulário inicial e fecha o login
                    fIndex index = new fIndex(tipo, nomeUsuario);
                    index.Show();
                    this.Hide();

                    DAO_Conexao.con.Close();
                }
                else if (tipo == 2)
                {

                    string nomeUsuario = txtUsuario.Text;

                    MessageBox.Show("Usuário Builder", "Bem-vindo", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    //Abre o formulário inicial e fecha o login
                    fIndex index = new fIndex(tipo, nomeUsuario);
                    index.Show();
                    this.Hide();

                    DAO_Conexao.con.Close();
                }
            }
        }
    }
}
