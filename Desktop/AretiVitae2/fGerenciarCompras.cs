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
    public partial class fGerenciarCompras : Form
    {
        public fGerenciarCompras()
        {
            InitializeComponent();

            // Estilização de Background
            BackColor = Color.FromArgb(12, 27, 60);

            // Estilização dos Labels
            groupFiltros.ForeColor = Color.White;
            lblTitulo.ForeColor = Color.White;
            lblTitulo2.ForeColor = Color.White;
            lblAssinatura.ForeColor = Color.White;
            lblID.ForeColor = Color.White;
            lblTotalAssinantes.ForeColor = Color.White;
            lblHecate.ForeColor = Color.White;
            lblArtemis.ForeColor = Color.White;
            lblSelene.ForeColor = Color.White;
            label7.ForeColor = Color.White;
            label10.ForeColor = Color.White;
            label11.ForeColor = Color.White;
            label13.ForeColor = Color.White;
            label11.ForeColor = Color.White;


            // Estilização dos Botões
            btnPesquisar.BackColor = Color.FromArgb(130, 151, 217);
            btnPesquisar.ForeColor = Color.FromArgb(12, 27, 60);
            btnPesquisar.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, btnPesquisar.Width, btnPesquisar.Height, 20, 20)
            );

            btnLimpar.BackColor = Color.FromArgb(130, 151, 217);
            btnLimpar.ForeColor = Color.FromArgb(12, 27, 60);
            btnLimpar.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, btnLimpar.Width, btnLimpar.Height, 20, 20)
            );
        }

        private void fGerenciarCompras_Load(object sender, EventArgs e)
        {
            carregarUsuarios(0,0); 
        }

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

        #region Método de Carregamento da Tabela (filtros e estatísticas)
        /// <summary>
        /// Método de abertura da listagem dos Usuários cadastrados (DatagGridView) e exibição de estatísticas de cadastro de usuários
        /// </summary>
        private void carregarUsuarios(int filtroAssinatura, int filtroID)
        {
            try
            {
                if (DAO_Conexao.con.State != System.Data.ConnectionState.Open)
                {
                    DAO_Conexao.con.Open();
                }


                string query = "SELECT * FROM AretiVitae_Compra WHERE 1=1";

                // Filtro por Plano
                if (filtroAssinatura > 0)
                {
                    query += " AND plano = " + filtroAssinatura;
                }

                // Filtro por ID do usuário
                if (filtroID > 0)
                {
                    query += " AND id_usuario = " + filtroID;
                }




                // Queries de contagem
                string assinantesTotal = "SELECT COUNT(*) FROM AretiVitae_Compra";
                string assinantesHecate = "SELECT COUNT(*) FROM AretiVitae_Compra WHERE plano = 1";
                string assinantesArtemis = "SELECT COUNT(*) FROM AretiVitae_Compra WHERE plano = 2";
                string assinantesSelene = "SELECT COUNT(*) FROM AretiVitae_Compra WHERE plano = 3";

                //Query de soma de receita total
                //string queryReceita = @"
                //SELECT SUM(
                //    CASE
                //        WHEN plano = 1 THEN 14
                //        WHEN plano = 2 THEN 25
                //        WHEN plano = 3 THEN 32
                //        ELSE 0
                //    END
                //) AS Receita
                //FROM AretiVitae_Compra
                //WHERE ativo = 0";

                MySqlDataAdapter adapter = new MySqlDataAdapter(query, DAO_Conexao.con);

                MySqlCommand queryT = new MySqlCommand(assinantesTotal, DAO_Conexao.con);
                int totalUsers = Convert.ToInt32(queryT.ExecuteScalar());

                MySqlCommand queryH = new MySqlCommand(assinantesHecate, DAO_Conexao.con);
                int hecate = Convert.ToInt32(queryH.ExecuteScalar());

                MySqlCommand queryA = new MySqlCommand(assinantesArtemis, DAO_Conexao.con);
                int artemis = Convert.ToInt32(queryA.ExecuteScalar());

                MySqlCommand queryS = new MySqlCommand(assinantesSelene, DAO_Conexao.con);
                int selene = Convert.ToInt32(queryS.ExecuteScalar());

                //MySqlCommand cmdReceita = new MySqlCommand(queryReceita, DAO_Conexao.con);

                //object resultado = cmdReceita.ExecuteScalar();

                //decimal receitaTotal = resultado != DBNull.Value
                //    ? Convert.ToDecimal(resultado)
                //    : 0;

                //lblReceitaTotal.Text = $"{receitaTotal:N2}";


                DataTable dt = new DataTable();
                adapter.Fill(dt);

                dgwCompras.DataSource = dt;

                // Estatísticas
                lblTotalAssinantes.Text = totalUsers.ToString();
                lblHecate.Text = hecate.ToString();
                lblArtemis.Text = artemis.ToString();
                lblSelene.Text = selene.ToString();

                // Cabeçalhos
                dgwCompras.Columns["id"].Visible = false;
                dgwCompras.Columns["id_usuario"].HeaderText = "ID Usuário";
                dgwCompras.Columns["plano"].HeaderText = "Plano";
                dgwCompras.Columns["dataCompra"].HeaderText = "Data da Compra";
                dgwCompras.Columns["dayVencimento"].HeaderText = "Data de Vencimento";
                dgwCompras.Columns["ativo"].HeaderText = "Situação";

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

        #endregion

        private void dgwCompras_CellFormatting(object sender, DataGridViewCellFormattingEventArgs e)
        {
            if(e.RowIndex < 0 || e.ColumnIndex < 0)
            {
                return;
            }

            if (e.Value == null || e.Value == DBNull.Value)
            {
                return;
            }
                

            if (dgwCompras.Columns[e.ColumnIndex].Name == "ativo" && e.Value != null)
            {
                if (e.Value.ToString() == "0")
                {
                    e.Value = "Ativa";
                    e.CellStyle.BackColor = Color.LightGreen;
                    e.CellStyle.ForeColor = Color.Black;
                }
                else if (e.Value.ToString() == "1")
                {
                    e.Value = "Inativa";
                    e.CellStyle.BackColor = Color.Salmon;
                    e.CellStyle.ForeColor = Color.White;
                }

                e.FormattingApplied = true;
            }

            if (dgwCompras.Columns.Contains("plano") && e.ColumnIndex == dgwCompras.Columns["plano"].Index)
            {
                if (e.Value != null)
                {
                    string assinatura = e.Value.ToString();

                    
                    if (assinatura == "1")
                    {
                        e.CellStyle.BackColor = Color.LightCyan;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Plano Hécate";
                    }
                    else if (assinatura == "2")
                    {
                        e.CellStyle.BackColor = Color.LightPink;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Plano Ártemis";
                    }
                    else if (assinatura == "3")
                    {
                        e.CellStyle.BackColor = Color.LightSalmon;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Plano Selene";
                    }
                }
            }
        }

        private void btnPesquisar_Click(object sender, EventArgs e)
        {
            int filtroID = 0;
            int filtroAssinatura = 0;

            if (!string.IsNullOrWhiteSpace(txtID.Text))
            {
                int.TryParse(txtID.Text, out filtroID);
            }

            if (cmbAssinatura.SelectedIndex == 0)
            {
                filtroAssinatura = 1;
            }
            else if(cmbAssinatura.SelectedIndex == 1)
            {
                filtroAssinatura = 2;
            }
            else if(cmbAssinatura.SelectedIndex == 2)
            {
                filtroAssinatura = 3;
            }
            
            carregarUsuarios(filtroAssinatura, filtroID);
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtID.Clear();
            cmbAssinatura.SelectedIndex = -1;

            carregarUsuarios(0, 0);
        }

        private void dgwCompras_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            
        }
    }
}
