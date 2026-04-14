using MySql.Data.MySqlClient;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

///<summary>
/// Tela de Gerenciamento dos Usuários que possuem assinatura paga da plataforma Network.
///</summary>
namespace Tela_Admin
{
    public partial class fGerenciarAssinatura : Form
    {
        #region Biblioteca Visual (bordas arrendondadas)
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

        public fGerenciarAssinatura()
        {
            InitializeComponent();
         
            //Chamada de método de carregamento da Lista de Usuários - com filtragem de assinatura NETWORK
            carregarUsuarios();

            #region Estilização de Componentes
            BackColor = System.Drawing.Color.FromArgb(12, 27, 60);
            lblTitulo.ForeColor = System.Drawing.Color.White;
            lblLegenda.ForeColor = System.Drawing.Color.White;
            lblLegAtivo.ForeColor = System.Drawing.Color.Wheat;

            btnHome.BackColor = Color.FromArgb(130, 151, 217);
            btnHome.ForeColor = Color.FromArgb(12, 27, 60);
            btnHome.Region = Region.FromHrgn(
            CreateRoundRectRgn(0, 0, btnHome.Width, btnHome.Height, 20, 20)
            );
            #endregion
        }

        /// <summary>
        //  Método de carregamento da Lista de Usuários
        //  - com filtragem de assinatura NETWORK
        /// </summary>
        private void carregarUsuarios()
        {
            try
            {
                // Abertura de Conexão com o BD
                if (DAO_Conexao.con.State != System.Data.ConnectionState.Open)
                {
                    DAO_Conexao.con.Open();
                }

                //Query para consulta no B.D - Filtragem de assinatura NETWORK
                string query = "SELECT * FROM AretiVitae_Usuario WHERE assinatura = 1"; // Busca na tabela de Usuários
                MySqlDataAdapter adapter = new MySqlDataAdapter(query, DAO_Conexao.con);
                DataTable dt = new DataTable();
                adapter.Fill(dt);

                dgwAssinatura.DataSource = dt; // Preenchimento do DataGridView


                //Renomeando títulos das colunas
                dgwAssinatura.Columns["id"].HeaderText = "ID";
                dgwAssinatura.Columns["username"].HeaderText = "Username";
                dgwAssinatura.Columns["idade"].HeaderText = "Idade";
                dgwAssinatura.Columns["email"].HeaderText = "E-mail";
                dgwAssinatura.Columns["senha"].HeaderText = "Senha";
                dgwAssinatura.Columns["cod_tree"].HeaderText = "Cod. Tree";
                dgwAssinatura.Columns["tipoRegistro"].HeaderText = "Registro";
                dgwAssinatura.Columns["registro"].HeaderText = "CPF/CNPJ";
                dgwAssinatura.Columns["ativo"].HeaderText = "Ativo";

                #region Estilização do Data GridView - Listagem de Usuários
                dgwAssinatura.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
                dgwAssinatura.ColumnHeadersDefaultCellStyle.Font = new Font("Josefin Sans", 10, FontStyle.Bold);
                dgwAssinatura.ColumnHeadersDefaultCellStyle.BackColor = Color.FromArgb(130, 151, 217);
                dgwAssinatura.ColumnHeadersDefaultCellStyle.ForeColor = Color.White;
                dgwAssinatura.EnableHeadersVisualStyles = false;
                dgwAssinatura.DefaultCellStyle.BackColor = Color.White;
                dgwAssinatura.DefaultCellStyle.ForeColor = Color.Black;
                dgwAssinatura.AlternatingRowsDefaultCellStyle.BackColor = Color.FromArgb(230, 235, 250);
                #endregion
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

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
