using MySql.Data.MySqlClient;
using System;
using System.Drawing;
using System.Windows.Forms;


namespace Tela_Admin
{
    /// <summary>
    /// Formulário responsável Cadastrar/Consultar/Excluir um Usuário no sistema
    /// </summary>

    public partial class fCadUsuario : Form
    {

        #region Bibioteca Visual (bordas arredondadas)
        /// <summary>
        /// Importação da função CreateRoundRectRgn da biblioteca Gdi32.dll
        /// para criação de bordas arredondadas em botões.
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

          
        public fCadUsuario()
        {
            InitializeComponent();



            #region Estilização dos Componentes
            //Estilização de Background em form MDI
            foreach (Control ctrl in this.Controls)
            {
                if (ctrl is MdiClient)
                {
                    ctrl.BackColor = Color.FromArgb(12, 27, 60);
                }
            }
            BackColor = Color.FromArgb(12, 27, 60);
        

            // Estilização das Labels
            lblTitulo.ForeColor = Color.White;
            lblTitulo2.ForeColor = Color.White;
            lblUsername.ForeColor = Color.White;
            lblSenha.ForeColor = Color.White;
            lblEmail.ForeColor = Color.White;
            lblIdade.ForeColor = Color.White;
            lblTree.ForeColor = Color.White;
            lblAtivo.ForeColor = Color.White;
            chkAtivo.ForeColor = Color.White;
            lblPlano.ForeColor = Color.White;
            lblTipoConta.ForeColor = Color.White;
            lblRegistro.ForeColor = Color.White;
            lblDescricao.ForeColor = Color.White;
            lblDescricao2.ForeColor = Color.White;

            // Estilização dos botões
            EstilizarBotao(btnCadastrar);
            EstilizarBotao(btnListarUsuarios);
            EstilizarBotao(btnAtualizar);
            EstilizarBotao(btnLimpar);


            //Estilização de Text Box e Combo Box
            EstilizarText(txtUsername);
            EstilizarText(txtIdade);
            EstilizarText(txtEmail);
            EstilizarText(txtSenha);
            EstilizarText(txtTree);
            EstilizarText(txtRegistro);

            EstilizarCombo(cmbTipoRegistro);
            EstilizarCombo(cmbAssinatura);
      

            // Configurações iniciais
            chkAtivo.Checked = true; // Por padrão, o usuário começa ativo
            cmbTipoRegistro.SelectedIndex = -1; // O tipo de Registro padrão será: Pessoa Física
        }


        /// <summary>
        /// Método de estilização padronizada dos Botões (buttons)
        /// </summary>
        /// <param name="botao">Elemento Button a ser estilizado</param>
        private void EstilizarBotao(Button botao)
        {
            botao.FlatStyle = FlatStyle.Flat;
            botao.UseVisualStyleBackColor = false;
            botao.BackColor = Color.FromArgb(154, 163, 255);
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
        private void EstilizarText(TextBox textBox)
        {
            textBox.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, textBox.Width, textBox.Height, 20, 20)
            );
        }

        /// <summary>
        /// Método de Estilização padronizada das ComboBox
        /// </summary>
        /// <param name="comboBox">Elemento Combo Box a ser estilizado</param>
        private void EstilizarCombo(ComboBox comboBox)
        {
            comboBox.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, comboBox.Width, comboBox.Height, 20, 20)
            );
        }

        #endregion


        /// <summary>
        /// Evento de Seleção de tipo de assinatura
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void cmbPlano_SelectedIndexChanged_1(object sender, EventArgs e)
        {
            // Mostra ou esconde campos conforme o tipo de plano (0 - Free, 1 - Network)
            if (cmbTipoRegistro.SelectedIndex == 1)
            {
                lblRegistro.Visible = true;
                lblTipoConta.Visible = true;
                txtRegistro.Visible = true;
                cmbTipoRegistro.Visible = true;
            }
            else
            {
                lblRegistro.Visible = false;
                lblTipoConta.Visible = false;
                txtRegistro.Visible = false;
                cmbTipoRegistro.Visible = false;
            }
        }


        /// <summary>
        /// Evento de Seleção de Tipo de Registro para assinatura Network
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void cmbTipoRegistro_SelectedIndexChanged_1(object sender, EventArgs e)
        {
            // Troca o texto do label de acordo com o tipo
            if (cmbTipoRegistro.SelectedIndex == 0)
                lblRegistro.Text = "CPF";
            else
                lblRegistro.Text = "CNPJ";

            lblRegistro.Visible = true;
            txtRegistro.Visible = true;
        }


        /// <summary>
        /// Verificação e Cadastro de Usuários na plataforma
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void btnCadastrar_Click_1(object sender, EventArgs e)
        {
            // Atribuição dos dados dos componentes às variáveis locais
            string username = txtUsername.Text;

            // Validação do campo idade para evitar FormatException
            int idade;
            if (!int.TryParse(txtIdade.Text, out idade))
            {
                MessageBox.Show("Informe uma idade válida!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtIdade.Focus();
                return; // interrompe o cadastro se idade inválida
            }

            string email = txtEmail.Text;
            string senha = txtSenha.Text;
            string tipoPlano = cmbTipoRegistro.Text;
            string cod_tree = txtTree.Text;
            string tree = txtTree.Text;
            int assinatura = 0;
            string tipoRegistro = " ";
            string registro = " ";
            int ativo = 0;

            // Verifica qual plano foi selecionado (Free ou Premium)
            if (cmbTipoRegistro.SelectedIndex == 0) // Plano Free
            {
                assinatura = 0;
                tipoRegistro = cmbTipoRegistro.Text;
                registro = txtRegistro.Text;
            }
            else if (cmbTipoRegistro.SelectedIndex == 1) // Plano Premium
            {
                assinatura = 1;
                tipoRegistro = cmbTipoRegistro.Text;
                registro = txtRegistro.Text;
            }

            // Define o valor do campo "ativo"
            if (chkAtivo.Checked == true)
            {
                ativo = 0; //Usuário Ativo
            }
            else if (chkAtivo.Checked == false)
            {
                ativo = 1; //Usuário Inativo
            }

            //Verificação de campos vazios
            if (cmbTipoRegistro.SelectedIndex == 1) // Validação de campos vazios específica caso o Usuário escolha o Plano Network, que exige mais campos
            {
                if (username == "" || email == "" || senha == "" || cod_tree == "" || tree == "" || cmbTipoRegistro.SelectedIndex == -1 || cmbTipoRegistro.SelectedIndex == -1 || registro == "")
                {
                    MessageBox.Show("Preencha todos os campos corretamente!");
                    return;
                }
                else if (idade < 13)
                {
                    MessageBox.Show("Idade Mínima: 13 anos", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
            else if (cmbTipoRegistro.SelectedIndex == 0) // Plano Free
            {
                if (username == "" || idade < 13 || email == "" || senha == "" || cod_tree == "" || tree == "")
                {
                    MessageBox.Show("Preencha todos os campos corretamente!");
                    return;
                }
                else if (idade < 13)
                {
                    MessageBox.Show("Idade Mínima: 13 anos", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }

            //Envio de Dados para o B.D
            try
            {
                Usuario usuario = new Usuario();
                if (usuario.cadastrarUsuario(username, idade, email, senha, cod_tree, assinatura, tipoRegistro, registro) == true)
                {
                    MessageBox.Show("Usuário cadastrado com sucesso!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro ao cadastrar: " + ex.Message);
            }
            finally
            {
                DAO_Conexao.con.Close();
            }
        }

        /// <summary>
        /// Atualização dos dados cadastrais dos Usuários
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void btnAtualizar_Click(object sender, EventArgs e)
        {
            // Atribuição dos dados do formulário às variáveis
            string username = txtUsername.Text;
            int idade = int.Parse(txtIdade.Text);
            string email = txtEmail.Text;
            string senha = txtSenha.Text;
            string tipoPlano = cmbTipoRegistro.Text;
            string tipoRegistro = cmbTipoRegistro.Text;
            string registro = txtRegistro.Text;
            string cod_tree = txtTree.Text;
            int assinatura = 0;
            int ativo = 0;

            // Verifica o tipo de plano
            if (cmbAssinatura.SelectedIndex == 0)
            {
                assinatura = 0;
            }
            else if (cmbAssinatura.SelectedIndex == 1)
            {
                assinatura = 1;
                tipoRegistro = cmbTipoRegistro.Text;
                registro = txtRegistro.Text;
            }

            // Marca se o usuário está ativo ou não 
            // 0 = ativo
            // 1 = desativado/inativo
             if(chkAtivo.Checked == true) ativo = 0; else ativo = 1;


                try
                {
                    Usuario usuario = new Usuario();
                    if (usuario.atualizarUsuario(username, idade, email, senha, cod_tree, assinatura, tipoRegistro, registro, ativo) == true)
                    {
                        MessageBox.Show("Usuário atualizado com sucesso!", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Erro ao atualizar: " + ex.Message);
                }
                finally
                {
                    DAO_Conexao.con.Close();
                }
        }

       /// <summary>
       /// Limpeza dos campos do formulário, para nova ação no sistema
       /// </summary>
       /// <param name="sender"></param>
       /// <param name="e"></param>
        private void btnLimpar_Click_1(object sender, EventArgs e)
        {
            txtUsername.Enabled = true;
            txtUsername.Clear();
            txtIdade.Clear();
            txtEmail.Clear();
            txtSenha.Clear();
            txtTree.Clear();
            txtTree.Clear();
            cmbAssinatura.SelectedIndex = -1;
            cmbTipoRegistro.SelectedIndex = -1;
            chkAtivo.Checked = true;
            txtRegistro.Clear();
            txtUsername.Focus();
        }


        /// <summary>
        /// Busca de usuário cadastrado no sistema quando o usuário clicar ENTER no campo de "Username"
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void txtUsername_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                e.SuppressKeyPress = true;

                try
                {
                    DAO_Conexao.con.Open();

                    // Busca o usuário no banco
                    MySqlCommand cmdUser = new MySqlCommand("SELECT * FROM AretiVitae_Usuario WHERE username='" + txtUsername.Text.Trim() + "';", DAO_Conexao.con);
                    using (MySqlDataReader resultado = cmdUser.ExecuteReader()) //Uso de using para tratar posteriores erros de abertura de conexões com o banco de dados
                    {
                        if (resultado.Read())
                        {
                            // Preenche os campos com as informações do usuário
                            txtUsername.Text = resultado["username"].ToString();
                            txtIdade.Text = resultado["idade"].ToString();
                            txtEmail.Text = resultado["email"].ToString();
                            txtSenha.Text = resultado["senha"].ToString();
                            txtTree.Text = resultado["cod_tree"].ToString();
                            cmbAssinatura.SelectedIndex = int.Parse(resultado["assinatura"].ToString());

                            // Define se o usuário está ativo
                            int ativo = int.Parse(resultado["ativo"].ToString());
                            chkAtivo.Checked = (ativo == 0);

                            txtUsername.Enabled = false;
                            btnAtualizar.Focus();

                            // Se o plano for Free, esconde os campos extras
                            if (cmbTipoRegistro.SelectedIndex == 0)
                            {
                                lblTipoConta.Visible = false;
                                lblRegistro.Visible = false;
                                cmbTipoRegistro.Visible = false;
                                txtRegistro.Visible = false;
                            }
                            else // Se for Premium, mostra e preenche
                            {
                                string tipoRegistro = resultado["tipoRegistro"].ToString();

                                if (tipoRegistro == "Pessoa Física")
                                {
                                    cmbTipoRegistro.SelectedIndex = 0; 
                                }
                                else if (tipoRegistro == "Pessoa Jurídica")
                                {
                                    cmbTipoRegistro.SelectedIndex = 1;
                                }
                                    


                                string registro = resultado["registro"].ToString();
                                txtRegistro.Text = registro;
                            }
                        }
                        else
                        {
                            MessageBox.Show("Usuário não encontrado!");
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Erro ao consultar: " + ex.Message);
                }
                finally
                {
                    if (DAO_Conexao.con.State == System.Data.ConnectionState.Open)
                        DAO_Conexao.con.Close();
                }
            }
        }

        /// <summary>
        /// Abertura da tela de listagem de usuários cadastrados
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void btnListarUsuarios_Click_2(object sender, EventArgs e)
        {
            flistaUsuarios flistaUsuarios = new flistaUsuarios();
            flistaUsuarios.Show();
        }

        private void fCadUsuario_Load(object sender, EventArgs e)
        {

        }

        /// <summary>
        /// Seleção do tipo de Assinatura (Free ou Network)
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param
        private void cmbAssinatura_SelectedIndexChanged_1(object sender, EventArgs e)
        {
            // 0 = Free - Campos extras "desaparecem"
            if (cmbAssinatura.SelectedIndex == 0)
            {
                txtRegistro.Clear();
                cmbTipoRegistro.SelectedIndex = -1;


                lblRegistro.Visible = false;
                lblTipoConta.Visible = false;
                txtRegistro.Visible = false;
                cmbTipoRegistro.Visible = false;
            }
            else // Network
            {
                lblRegistro.Visible = true;
                lblTipoConta.Visible = true;
                txtRegistro.Visible = true;
                cmbTipoRegistro.Visible = true;
            }
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}
