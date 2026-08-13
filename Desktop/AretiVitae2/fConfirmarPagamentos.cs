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
    public partial class fConfirmarPagamentos : Form
    {
        public fConfirmarPagamentos()
        {
            InitializeComponent();
        }

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

        private void fConfirmarPagamentos_Load(object sender, EventArgs e)
        {
            carregarUsuarios();

            btnConfirmar.FlatStyle = FlatStyle.Flat;
            btnConfirmar.FlatAppearance.BorderColor = System.Drawing.Color.Gray;

            BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
            lblTitulo.ForeColor = System.Drawing.Color.White;
            lblTitulo2.ForeColor = System.Drawing.Color.White;
            lblSub1.ForeColor = System.Drawing.Color.White;
            lblSub2.ForeColor = System.Drawing.Color.White;
            lblSub3.ForeColor = System.Drawing.Color.White;
            lblUsuario.ForeColor = System.Drawing.Color.White;
            lblData.ForeColor = System.Drawing.Color.White;
            lblPlano.ForeColor = System.Drawing.Color.White;
            lblValorPlano.ForeColor= System.Drawing.Color.White;
            lblValorPago.ForeColor= System.Drawing.Color.White;
            lblPagamentos.ForeColor= System.Drawing.Color.White;

            btnConfirmar.FlatStyle = FlatStyle.Flat;
            btnConfirmar.UseVisualStyleBackColor = false;
            btnConfirmar.BackColor = Color.FromArgb(154, 163, 255);
            btnConfirmar.ForeColor = Color.Black;
            btnConfirmar.FlatAppearance.BorderSize = 0;
            btnConfirmar.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, btnConfirmar.Width, btnConfirmar.Height, 20, 20)
            );


        }

        #region Método de Carregamento da Tabela (filtros e estatísticas)
        /// <summary>
        /// Método de abertura da listagem dos Usuários cadastrados (DatagGridView) e exibição de estatísticas de cadastro de usuários
        /// </summary>
        private void carregarUsuarios()
        {
            try
            {
                if (DAO_Conexao.con.State != System.Data.ConnectionState.Open)
                {
                    DAO_Conexao.con.Open();
                }


                string query = "SELECT * FROM AretiVitae_Compra WHERE ativo = 2";
                string queryCount = "SELECT COUNT(*) FROM AretiVitae_Compra WHERE ativo = 2";

                MySqlDataAdapter queryAdapter = new MySqlDataAdapter(query, DAO_Conexao.con);
                MySqlCommand countRegistros = new MySqlCommand(queryCount, DAO_Conexao.con);

                DataTable dt = new DataTable();
                queryAdapter.Fill(dt);

                int totalRegistros = Convert.ToInt32(countRegistros.ExecuteScalar());
                lblPagamentos.Text = totalRegistros.ToString();

                dgwCompras.DataSource = dt;


                // Cabeçalhos
                dgwCompras.Columns["id"].Visible = false;
                dgwCompras.Columns["id_usuario"].HeaderText = "ID Usuário";
                dgwCompras.Columns["plano"].HeaderText = "Plano";
                dgwCompras.Columns["dataCompra"].HeaderText = "Data da Compra";
                dgwCompras.Columns["dayVencimento"].HeaderText = "Data de Vencimento";
                dgwCompras.Columns["ativo"].HeaderText = "Situação"; // Cabeçalhos da tabela

            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro ao carregar usuários: " + ex.Message);
            }
            finally
            {
                DAO_Conexao.con.Close();
            }
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label7_Click(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void label8_Click(object sender, EventArgs e)
        {

        }

        private void dgwCompras_CellContentDoubleClick(object sender, DataGridViewCellEventArgs e)
        {
           
        }

        private void dgwCompras_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0)
            {
                DataGridViewRow linhaSelecionada = dgwCompras.Rows[e.RowIndex];

                if (DAO_Conexao.con.State != System.Data.ConnectionState.Open)
                {
                    DAO_Conexao.con.Open();
                }

                int idUsuario = Convert.ToInt32(linhaSelecionada.Cells["id_usuario"].Value);
                string queryUser = "SELECT username FROM AretiVitae_Usuario WHERE id = " + idUsuario;

                MySqlCommand user = new MySqlCommand(queryUser, DAO_Conexao.con);


                object resultadoUser = user.ExecuteScalar();
                txtUsuario.Text = resultadoUser != null ? resultadoUser.ToString() : "Usuário não encontrado";

                int plano = Convert.ToInt32(linhaSelecionada.Cells["plano"].Value);
                
                if (plano == 1)
                {
                    txtPlano.Text = "Hécate";
                    txtValorPlano.Text = "R$ 8,90";
                }
                else if (plano == 2)
                {
                    txtPlano.Text = "Ártemis";
                    txtValorPlano.Text = "R$ 17,90";
                }
                else if (plano == 3)
                {
                    txtPlano.Text = "Selene";
                    txtValorPlano.Text = "R$ 25,90";
                }

                txtData.Text = linhaSelecionada.Cells["dataCompra"].Value.ToString();
                txtPlano.Text = linhaSelecionada.Cells["plano"].Value.ToString();
                txtValorPago.Text = "R$ " +linhaSelecionada.Cells["valor_pago"].Value.ToString();
                lblID.Text = linhaSelecionada.Cells["id_usuario"].Value.ToString();

                txtUsuario.Enabled = false;
                txtPlano.Enabled = false;
                txtValorPago.Enabled = false;
                txtData.Enabled = false;
                txtValorPlano.Enabled = false;
            }
        }

        private void btnConfirmar_Click(object sender, EventArgs e)
        {
            if(txtValorPlano.Text == txtValorPago.Text)
            {
                DialogResult resposta = MessageBox.Show("Confirmar Pagamento? ", "Atenção", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);

                if (resposta == DialogResult.Yes)
                {
                    int idUsuario = Convert.ToInt32(lblID.Text);
                    string queryConfirmar = "UPDATE AretiVitae_Compra SET ativo = 1 WHERE id_usuario = " + idUsuario;
                    MySqlCommand confirmar = new MySqlCommand(queryConfirmar, DAO_Conexao.con);

                    confirmar.ExecuteNonQuery();

                    MessageBox.Show("Pagamento Confirmado com sucesso!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
            }
            else
            {
                DialogResult resposta = MessageBox.Show("O valor pago pelo usuário NÃO coincide com o valor da assinatura! \nDeseja Continuar?", "Atenção", MessageBoxButtons.YesNo, MessageBoxIcon.Error);

                if (resposta == DialogResult.Yes)
                {
                    int idUsuario = Convert.ToInt32(lblID.Text);
                    string queryConfirmar = "UPDATE AretiVitae_Compra SET ativo = 1 WHERE id_usuario = " + idUsuario;
                    MySqlCommand confirmar = new MySqlCommand(queryConfirmar, DAO_Conexao.con);

                    confirmar.ExecuteNonQuery();

                    MessageBox.Show("Pagamento Confirmado com sucesso!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
            }
        }
    }
    #endregion
}