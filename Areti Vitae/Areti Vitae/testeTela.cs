using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Tela_Admin
{
    public partial class testeTela : Form
    {
        public testeTela()
        {
            InitializeComponent();
        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            flistaUsuarios flistaUsuarios = new flistaUsuarios();
            flistaUsuarios.MdiParent = this;
            flistaUsuarios.Show();
        }
    }
}
