using System;
using System.Drawing;
using System.Windows.Forms;


namespace Tela_Admin
{
    /// <summary>
    /// Formulário principal da aplicação Desktop.
    /// Responsável por centralizar a navegação do sistema, controlar permissões conforme o tipo de usuário 
    /// e abrir os demais formulários.
    /// </summary>
    public partial class fIndex : Form
    {
        /// <summary>
        /// Armazena o tipo de usuário autenticado (ADM ou Builder).
        /// </summary>
        int tipoUsuario;

        #region Bibioteca Visual (bordas arredondadas)
        /// <summary>
        /// Importação da função CreateRoundRectRgn da biblioteca Gdi32.dll para criação de bordas arredondadas em botões.
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


        public fIndex()
        {
            InitializeComponent();
        }

        /// <summary>
        /// Construtor com validação de nível de acesso.
        /// Recebe o tipo do usuário logado e configura permissões visuais.
        /// </summary>
        /// <param name="tipo">Tipo do usuário autenticado</param>
        public fIndex(int tipo)
        {
            InitializeComponent();
            tipoUsuario = tipo;

            //Caso não seja ADM Master, oculta Área Administrativa 
            if (tipoUsuario == 1)
            {
                btnBuilders.Visible = false;
            }

            #region Estilização de Componentes Visuais
            //Estilização geral do menu
            panelMenu.BackColor = Color.FromArgb(75, 94, 153);
            foreach (Control ctrl in this.Controls)
            {
                if (ctrl is MdiClient)
                {
                    ctrl.BackColor = Color.FromArgb(12, 27, 60);
                }
            }

            // Estilização dos botões principais
            estilizarBotao(btnCadUsuario);
            estilizarBotao(btnExcUsuario);
            estilizarBotao(btnListUsuario);
            estilizarBotao(btnGerenciar);
            estilizarBotao(btnCadNetwork);
            estilizarBotao(btnListAssinatura);
            estilizarBotao(btnAjuda);
            estilizarBotao(btnBuilders);
            estilizarBotao(btnSair);
        }

        /// <summary>
        /// Método de estilização padronizada aos Botões.
        /// </summary>
        /// <param name="botao">Botão a ser estilizado</param>
        private void estilizarBotao(Button botao)
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
        #endregion

        /// <summary>
        /// Abertura de formulário de cadastro e consulta de usuários.
        /// </summary>
        private void consultarUsuáriosToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fCadUsuario cadUsuario = new fCadUsuario();
            cadUsuario.Show();
        }

        /// <summary>
        /// Encerra completamente a aplicação.
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void sairToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }


        /// <summary>
        /// Abertura de formulário listagem e gerenciamento de Assinaturas 
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void gerenciarAssinaturas_Click(object sender, EventArgs e)
        {
            fGerenciarAssinatura fGerenciarAssinatura = new fGerenciarAssinatura();
            fGerenciarAssinatura.Show();
        }


        /// <summary>
        /// Abertura de formulário de listagem de usuários
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void button3_Click(object sender, EventArgs e)
        {
            flistaUsuarios flistaUsuarios = new flistaUsuarios();
            flistaUsuarios.ShowDialog();
        }

        /// <summary>
        /// Abertura de formulário de exclusão de usuários
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void button2_Click(object sender, EventArgs e)
        {
            excUsuario excUsuario = new excUsuario();
            excUsuario.MdiParent = this;
            excUsuario.Show();
        }

        /// <summary>
        /// Abertura de formulário de cadastro de usuários
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void btnCadUsuario_Click(object sender, EventArgs e)
        {
            fCadUsuario cadUsuario = new fCadUsuario();
            cadUsuario.MdiParent = this;
            cadUsuario.Show();
        }

        /// <summary>
        /// Abertura de formulário de gerenciamento de Assinaturas
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void btnListAssinatura_Click(object sender, EventArgs e)
        {
            fGerenciarAssinatura fGerenciarAssinatura = new fGerenciarAssinatura();
            fGerenciarAssinatura.MdiParent = this;
            fGerenciarAssinatura.Show();
        }

        /// <summary>
        /// Abertura de página de créditos gerais da Aplicação
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void btnAjuda_Click(object sender, EventArgs e)
        {
            fSobreNos fSobreNos = new fSobreNos();
            fSobreNos.MdiParent = this;
            fSobreNos.Show();
        }

        /// <summary>
        /// Abertura de área administrativa exclusiva para Builders
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void btnBuilders_Click(object sender, EventArgs e)
        {
            fConsultaADM fAreaADM = new fConsultaADM();
            fAreaADM.Show();
        }

        /// <summary>
        /// Finaliza a aplicação
        /// </summary>
        /// <param name="sender">Objeto que disparou o evento</param>
        /// <param name="e">Argumentos do evento</param>
        private void button1_Click_2(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void fIndex_Load(object sender, EventArgs e)
        {

        }
    }

}
