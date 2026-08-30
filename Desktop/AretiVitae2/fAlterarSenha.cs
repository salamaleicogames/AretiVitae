using MySql.Data.MySqlClient;
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
    /// Formulário responsável pela alteração de senha de usuários administradores.
    /// Acesso restrito ao ADM Master.
    /// </summary>
    public partial class fAlterarSenha : Form
    {
        #region Biblioteca Visual (bordas arredondadas)

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

        public fAlterarSenha()
        {
            InitializeComponent();

            BackColor = Color.FromArgb(12, 27, 60);

            // Estilização dos botões
            EstilizarBotao(btnAlterar);
            EstilizarBotao(btnLimpar);
            EstilizarBotao(btnListar);

            // Estilização dos textos
            lblTitulo.ForeColor = Color.White;
            lblUsuario.ForeColor = Color.White;
           // lblSenha.ForeColor = Color.White;
            //lblSenhaAtual.ForeColor = Color.White;
            lblNovaSenha.ForeColor = Color.White;
            lblConfNSenha.ForeColor = Color.White;
            lblDescricao.ForeColor = Color.White;
            lblDescricao2.ForeColor = Color.White;

            // Estilização das entradas
            EstilizarText(txtNovaSenha);
            EstilizarText(txtConfirmarNSenha);
            EstilizarCombo(cmbUsuario);

            // Carregamento dos usuários ADM
            Usuario user = new Usuario();
            MySqlDataReader r = user.ConsultarUsuarioADM();

            while (r.Read())
                cmbUsuario.Items.Add(r["usuario"].ToString());

            DAO_Conexao.con.Close();
        }


        #region Métodos de Estilização

        /// <summary>
        /// Aplica estilo visual padrão aos botões.
        /// </summary>
        private void EstilizarBotao(Button botao)
        {
            botao.FlatStyle = FlatStyle.Flat;
            botao.UseVisualStyleBackColor = false;
            botao.BackColor = Color.FromArgb(154, 163, 255);
            botao.ForeColor = Color.White;
            botao.FlatAppearance.BorderSize = 0;

            botao.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, botao.Width, botao.Height, 20, 20)
            );
        }

        /// <summary>
        /// Aplica bordas arredondadas aos TextBox.
        /// </summary>
        private void EstilizarText(TextBox textBox)
        {
            textBox.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, textBox.Width, textBox.Height, 20, 20)
            );
        }

        /// <summary>
        /// Aplica bordas arredondadas aos ComboBox.
        /// </summary>
        private void EstilizarCombo(ComboBox comboBox)
        {
            comboBox.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, comboBox.Width, comboBox.Height, 20, 20)
            );
        }

        #endregion 




        private void fAlterarSenha_Load(object sender, EventArgs e)
        {

        }

        private void lblDescricao_Click(object sender, EventArgs e)
        {

        }

        /// <summary>
        /// Confirma a alteração de senha do administrador selecionado.
        /// </summary>
        private void btnAlterar_Click(object sender, EventArgs e)
        {
            string usuario = cmbUsuario.Text;
            string senha = txtConfirmarNSenha.Text;

            try
            {
                if (txtNovaSenha.Text == "" || txtConfirmarNSenha.Text == "" || cmbUsuario.Text == "")
                {
                    MessageBox.Show("Preencha os campos vazios!");
                }
                else if (txtNovaSenha.Text != txtConfirmarNSenha.Text)
                {
                    MessageBox.Show("Confirme a nova senha corretamente!");
                }
                else
                {
                    Usuario user = new Usuario();

                    if (user.AtualizarUsuarioADM(usuario, senha))
                        MessageBox.Show("Senha alterada com sucesso!");
                    else
                        MessageBox.Show("Não foi possível alterar a senha!");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro: " + ex.Message);
            }
        }

        /// <summary>
        /// Abre o formulário de listagem de administradores.
        /// </summary>
        private void btnListar_Click(object sender, EventArgs e)
        {
            listaUsuariosADM listaUsuariosADM = new listaUsuariosADM();
            listaUsuariosADM.ShowDialog();
        }


        ///// <summary>
        ///// Atualiza a senha atual exibida conforme usuário selecionado.
        ///// </summary>
        //private void cmbUsuario_SelectedIndexChanged(object sender, EventArgs e)
        //{
        //    if (cmbUsuario.SelectedItem != null)
        //    {
        //        Usuario user = new Usuario();
        //        lblSenhaAtual.Text = user.consultarSenhaADM(cmbUsuario.SelectedItem.ToString());
        //    }
        //}

        /// <summary>
        /// Limpa os campos do formulário.
        /// </summary>
        private void btnLimpar_Click(object sender, EventArgs e)
        {
            cmbUsuario.SelectedIndex = -1;
            txtNovaSenha.Clear();
            txtConfirmarNSenha.Clear();
            //lblSenhaAtual.Text = string.Empty;
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}
