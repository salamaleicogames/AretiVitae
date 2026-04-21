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
    /// Formulário designado a administração interna da aplicação Desktop
    /// Campo restrito a Usuários 'Builder'
    /// </summary>
    public partial class fConsultaADM : Form
    {
        #region Biblioteca de Estilização Visual
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


        public fConsultaADM()
        {
            InitializeComponent();

            #region Estilização dos Componentes

            //Estilização de Background em form MDI
            panelMenu.BackColor = Color.FromArgb(75, 94, 153);
            foreach (Control ctrl in this.Controls)
            {
                if (ctrl is MdiClient)
                {
                    ctrl.BackColor = Color.FromArgb(12, 27, 60);
                }
            }


            //Estilização dos Botões
            btnListBuilders.FlatStyle = FlatStyle.Flat;
            btnListBuilders.UseVisualStyleBackColor = false;
            btnListBuilders.BackColor = Color.FromArgb(154, 163, 255);
            btnListBuilders.ForeColor = Color.White;
            btnListBuilders.FlatAppearance.BorderSize = 0;
            btnListBuilders.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, btnListBuilders.Width, btnListBuilders.Height, 20, 20)
            );

            btnAlterSenha.FlatStyle = FlatStyle.Flat;
            btnAlterSenha.UseVisualStyleBackColor = false;
            btnAlterSenha.BackColor = Color.FromArgb(154, 163, 255);
            btnAlterSenha.ForeColor = Color.White;
            btnAlterSenha.FlatAppearance.BorderSize = 0;
            btnAlterSenha.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, btnAlterSenha.Width, btnAlterSenha.Height, 20, 20)
            );
            #endregion 
        }

        private void fConsultaADM_Load(object sender, EventArgs e)
        {

        }

        /// <summary>
        /// Abre o formulário utilizado para consulta e alteração da senha dos usuários administradores.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void btnAlterSenha_Click(object sender, EventArgs e)
        {
            fAlterarSenha fAlterarSenha = new fAlterarSenha();
            fAlterarSenha.MdiParent = this;
            fAlterarSenha.Show();
        }

        /// <summary>
        /// Abertura da Lista de Usuários administradores da plataforma
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void btnListBuilders_Click(object sender, EventArgs e)
        {
            listaUsuariosADM listaUsuariosADM = new listaUsuariosADM();
            listaUsuariosADM.MdiParent = this;
            listaUsuariosADM.Show();
        }


    }
}
