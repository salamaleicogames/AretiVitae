using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

//TELA DE MENU - 'ÁREA DO ADMINISTADOR'
// *RESTRITO A ADM MASTER
namespace Tela_Admin
{
    public partial class fAreaADM : Form
    {
        public fAreaADM()
        {
            InitializeComponent();
        }

        //ABERTURA DE LISTA DE USUÁRIOS ADMINISTRADORES
        private void listarUsuáriosToolStripMenuItem_Click(object sender, EventArgs e)
        {
            listaUsuariosADM listaUsuariosADM = new listaUsuariosADM();
            listaUsuariosADM.MdiParent = this;
            listaUsuariosADM.Show();
        }

        //AÇÃO DE FECHAR O MENU E VOLTAR A TELA INICIAL (index)
        private void sairToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        //ABERTURA DE FORMULÁRIO DE ALTERAR SENHA DO(S) ADMINISTRADOR (ES)
        private void alterarSenhaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fAlterarSenha fAlterarSenha = new fAlterarSenha();
            fAlterarSenha.Show();
        }

        private void fAreaADM_Load(object sender, EventArgs e)
        {

        }

        private void btnExcUsuario_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
