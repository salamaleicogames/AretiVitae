using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.Button;

namespace Tela_Admin
{

    /// <summary>
    /// Formulário responsável pelo login de Administradores no sistema.
    /// Realiza validação de credenciais e direciona o usuário conforme seu nível de acesso.
    /// </summary>
    public partial class fLogin : Form
    {
        /// Construtor do formulário de login.
        /// Inicializa os componentes, testa a conexão com o banco de dados e aplica estilizações visuais iniciais.
        /// </summary>
        public fLogin()
        {
            InitializeComponent();


            //Teste de conexão com Banco de Dados
            if (DAO_Conexao.getConexao("143.106.241.4", "cl204177", "cl204177", "cl*04062009"))
                Console.WriteLine("Conectado");
            else
                Console.WriteLine("Erro de conexão");

            
            //Estilização de elementos visuais
            btnEntrar.FlatStyle = FlatStyle.Flat;
            btnEntrar.FlatAppearance.BorderColor = System.Drawing.Color.Gray;

            lblDescicao.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
            pictureBox2.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
            imgLogo.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);

            //Define foco inicial no campo usuário
            txtUsuario.Focus();
        }


        /// <summary>
        /// Evento do botão Entrar.
        /// Realiza a validação dos campos, autenticação do usuário e redirecionamento conforme o tipo de administrador.
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void btnEntrar_Click(object sender, EventArgs e)
        {
            //Verificação de campos vazios
            if (string.IsNullOrEmpty(txtUsuario.Text) || string.IsNullOrEmpty(mtxtSenha.Text))
            {
                MessageBox.Show("Preencha todos os campos corretamente!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return;
            }


            // Validação de Usuário e Senha - (retorna tipo de acesso)
            int tipo = DAO_Conexao.validaLogin(txtUsuario.Text, mtxtSenha.Text);

            if (tipo == 0)
            {
                MessageBox.Show("Usuário/Senha inválidos!");

                DAO_Conexao.con.Close();
            }
            else if (tipo == 1) 
            {
            
                MessageBox.Show("Usuário ADM", "Bem-vindo", MessageBoxButtons.OK, MessageBoxIcon.Information);

                //Abre o formulário inicial e fecha o login
                fIndex index = new fIndex(tipo);
                index.Show();
                this.Hide();

                DAO_Conexao.con.Close();
            }
            else if (tipo == 2)
            {
                MessageBox.Show("Usuário Builder", "Bem-vindo", MessageBoxButtons.OK, MessageBoxIcon.Information);

                //Abre o formulário inicial e fecha o login
                fIndex index = new fIndex(tipo);
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
            if(e.KeyChar == 13)
            {
                //Verificação de campos vazios//
                if (string.IsNullOrEmpty(txtUsuario.Text) || string.IsNullOrEmpty(mtxtSenha.Text))
                {
                    MessageBox.Show("Preencha todos os campos corretamente!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return;
                }


                // Validação de Usuário e Senha
                int tipo = DAO_Conexao.validaLogin(txtUsuario.Text, mtxtSenha.Text);

                if (tipo == 0)
                {
                    MessageBox.Show("Usuário/Senha inválidos!");

                    DAO_Conexao.con.Close();
                }
                else if (tipo == 1)
                {

                    MessageBox.Show("Usuário ADM", "Bem-vindo", MessageBoxButtons.OK, MessageBoxIcon.Information);

                    //Abre o formulário inicial e fecha o login
                    fIndex index = new fIndex(tipo);
                    index.Show();
                    this.Hide();



                    DAO_Conexao.con.Close();
                }
                else if (tipo == 2)
                {

                    MessageBox.Show("Usuário ADM Master", "Bem-vindo", MessageBoxButtons.OK, MessageBoxIcon.Information);

                    //Abre o formulário inicial e fecha o login
                    fIndex index = new fIndex(tipo);
                    index.Show();
                    this.Hide();

                    DAO_Conexao.con.Close();
                }
            }
        }

        private void fLogin_Load(object sender, EventArgs e)
        {

        }
    }
}
