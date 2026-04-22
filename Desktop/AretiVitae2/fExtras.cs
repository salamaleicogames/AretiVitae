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
    public partial class fExtras : Form
    {
        public fExtras()
        {
            InitializeComponent();

            lblDescicao.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
            pictureBox2.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
            imgLogo.BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
        }

        private void fExtras_Load(object sender, EventArgs e)
        {

        }

        private void btnInformacoes_Click(object sender, EventArgs e)
        {
            fAjuda fAjuda = new fAjuda();
            fAjuda.ShowDialog();
        }
    }
}
