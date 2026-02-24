using MySql.Data.MySqlClient;
using System;
using System.Drawing;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Tela_Admin
{
    /// <summary>
    /// Formulário responsável pela consulta e exclusão de usuários do sistema.
    /// Permite buscar um usuário pelo nome e realizar sua remoção do banco de dados.
    /// </summary>
    public partial class excUsuario : Form
    {
        #region Biclioteca Visual (bordas arrendondadas)
        /// <summary>
        /// Importação da função CreateRoundRectRgn da biblioteca Gdi32.dll,
        /// utilizada para criação de bordas arredondadas nos componentes visuais.
        /// </summary>
        [System.Runtime.InteropServices.DllImport("Gdi32.dll", EntryPoint = "CreateRoundRectRgn")]
        private static extern IntPtr CreateRoundRectRgn(
            int nLeftRect,
            int nTopRect,
            int nRightRect,
            int nBottomRect,
            int nWidthEllipse,
            int nHeightEllipse
        );
        #endregion

        /// <summary>
        /// Construtor do formulário.
        /// Inicializa os componentes e aplica estilização visual.
        /// </summary>
        public excUsuario()
        {
            InitializeComponent();

            #region Estilização dos Componentes
            BackColor = Color.FromArgb(12, 27, 60);

            lblUsername.ForeColor = Color.White;
            lblEmail.ForeColor = Color.White;
            lblSenha.ForeColor = Color.White;
            lblDescricao.ForeColor = Color.White;
            lblDescricao2.ForeColor = Color.White;

            EstilizarBotao(btnExcluir);
            EstilizarBotao(btnLimpar);
            EstilizarBotao(btnListarUsuarios);

            EstilizarText(txtSenha);
            EstilizarText(txtUsername);
            EstilizarText(txtEmail);

            txtSenha.Text = "";
            txtSenha.PasswordChar = '*';
        }

        /// <summary>
        /// Método de estilização padronizada dos Botões (buttons)
        /// </summary>
        /// <param name="botao">Elemento Button a ser estilizado</param>
        private void EstilizarBotao(System.Windows.Forms.Button botao)
        {
            botao.FlatStyle = FlatStyle.Flat;
            botao.UseVisualStyleBackColor = false;
            botao.BackColor =  Color.FromArgb(130, 151, 217);
            botao.ForeColor = Color.Black;
            botao.FlatAppearance.BorderSize = 0;
            botao.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, botao.Width, botao.Height, 20, 20)
            );
        }

        /// <summary>
        /// Método de estilização padronizada dos Campos de Texto (TexBox)
        /// </summary>
        /// <param name="textBox">Elemento TextBox a ser estilizado</param>
        private void EstilizarText(System.Windows.Forms.TextBox textBox)
        {
            textBox.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, textBox.Width, textBox.Height, 20, 20)
            );
        }
        #endregion

        /// <summary>
        /// Evento acionado ao pressionar ENTER no campo Username.
        /// Realiza a consulta do usuário no banco de dados e preenche os campos
        /// caso o registro seja encontrado.
        /// </summary>
        private void txtUsername_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                e.SuppressKeyPress = true;

                try
                {
                    Usuario usuario = new Usuario();
                    MySqlDataReader resultado = usuario.consultarUsuario(txtUsername.Text.Trim());

                    if (resultado.Read())
                    {
                        txtUsername.Text = resultado["username"].ToString();
                        txtEmail.Text = resultado["email"].ToString();
                        txtSenha.Text = resultado["senha"].ToString();
                    }
                    else
                    {
                        MessageBox.Show("Usuário não encontrado!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    }

                    resultado.Close();
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Erro ao consultar usuário: " + ex.Message);
                }
                finally
                {
                    DAO_Conexao.con.Close();
                }
            }
        }

        /// <summary>
        /// Abre o formulário de listagem de usuários cadastrados.
        /// </summary>
        private void btnListarUsuarios_Click(object sender, EventArgs e)
        {
            flistaUsuarios listarUsuarios = new flistaUsuarios();
            listarUsuarios.ShowDialog();
        }

        /// <summary>
        /// Limpa os campos do formulário e retorna o foco para o campo Username.
        /// </summary>
        private void btnLimpar_Click_1(object sender, EventArgs e)
        {
            txtUsername.Clear();
            txtUsername.Focus();

            txtEmail.Clear();
            txtSenha.Clear();
        }

        /// <summary>
        /// Realiza a exclusão do usuário selecionado.
        /// </summary>
        private void btnExcluir_Click(object sender, EventArgs e)
        {
            string username = txtUsername.Text;
            string email = txtEmail.Text;
            string senha = txtSenha.Text;

            try
            {
                Usuario usuario = new Usuario();

                if (usuario.excluirUsuario(username, email, senha))
                {
                    MessageBox.Show("Usuário excluído com sucesso!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else
                {
                    MessageBox.Show("Erro ao excluir usuário!", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro: " + ex.Message);
            }
        }

        /// <summary>
        /// Evento de carregamento do formulário.
        /// </summary>
        private void excUsuario_Load(object sender, EventArgs e)
        {
        }
    }
}
